import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    uuid!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

   
}
