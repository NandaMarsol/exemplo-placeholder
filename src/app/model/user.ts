import { Address } from './adress';
import { Company } from './company';

export class User {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public adress: Address;
    public phone: string;
    public website: string;
    public company: Company;
    
}