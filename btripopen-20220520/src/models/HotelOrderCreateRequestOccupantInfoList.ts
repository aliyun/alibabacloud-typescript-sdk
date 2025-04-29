// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderCreateRequestOccupantInfoList extends $dara.Model {
  /**
   * @example
   * 124231213
   */
  cardNo?: string;
  /**
   * @example
   * 1
   */
  cardType?: number;
  /**
   * @example
   * 1
   */
  customerType?: number;
  /**
   * @example
   * 123112
   */
  departmentId?: string;
  departmentName?: string;
  /**
   * @example
   * demo
   */
  email?: string;
  /**
   * @example
   * 1
   */
  employeeType?: number;
  /**
   * @example
   * san
   */
  firstName?: string;
  /**
   * @example
   * zhang
   */
  lastName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18277123451
   */
  phone?: string;
  roomNo?: number;
  /**
   * @example
   * 87817182
   */
  staffNo?: string;
  /**
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      cardNo: 'card_no',
      cardType: 'card_type',
      customerType: 'customer_type',
      departmentId: 'department_id',
      departmentName: 'department_name',
      email: 'email',
      employeeType: 'employee_type',
      firstName: 'first_name',
      lastName: 'last_name',
      name: 'name',
      phone: 'phone',
      roomNo: 'room_no',
      staffNo: 'staff_no',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardNo: 'string',
      cardType: 'number',
      customerType: 'number',
      departmentId: 'string',
      departmentName: 'string',
      email: 'string',
      employeeType: 'number',
      firstName: 'string',
      lastName: 'string',
      name: 'string',
      phone: 'string',
      roomNo: 'number',
      staffNo: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

