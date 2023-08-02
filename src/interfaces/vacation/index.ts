import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VacationInterface {
  id?: string;
  employee_id?: string;
  days_off: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface VacationGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
}
