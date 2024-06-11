import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
    lastName: string;
    
  @Column()
  gender: string;
  
  @Column()
  address: string;
  
  @Column()
  phoneNumber: string;

  @Column()
  email: string;
    
  @Column()
  accountNumber: string;
  
  @Column()
  accountBalance: number;
    
  @Column()
  status: string;

  @Column({ default: true })
    isActive: boolean;
    
 @CreateDateColumn()
    createdAt: Date

 @UpdateDateColumn()
    updateAt: Date
    

}
