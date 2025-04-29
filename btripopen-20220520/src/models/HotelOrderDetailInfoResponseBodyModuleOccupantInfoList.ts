// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderDetailInfoResponseBodyModuleOccupantInfoListCostCenterInfoList } from "./HotelOrderDetailInfoResponseBodyModuleOccupantInfoListCostCenterInfoList";


export class HotelOrderDetailInfoResponseBodyModuleOccupantInfoList extends $dara.Model {
  /**
   * @example
   * 1235615612424222
   */
  cardNo?: string;
  /**
   * @example
   * 1
   */
  cardType?: number;
  costCenterInfoList?: HotelOrderDetailInfoResponseBodyModuleOccupantInfoListCostCenterInfoList[];
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
  /**
   * @example
   * demo
   */
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
   * zhangsan
   */
  firstName?: string;
  /**
   * @example
   * true
   */
  isBooker?: boolean;
  /**
   * @example
   * zhang
   */
  lastName?: string;
  name?: string;
  /**
   * @example
   * 0571-872237
   */
  phone?: string;
  roomNo?: number;
  /**
   * @example
   * true
   */
  selected?: boolean;
  /**
   * @example
   * 12817218
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
      costCenterInfoList: 'cost_center_info_list',
      customerType: 'customer_type',
      departmentId: 'department_id',
      departmentName: 'department_name',
      email: 'email',
      employeeType: 'employee_type',
      firstName: 'first_name',
      isBooker: 'is_booker',
      lastName: 'last_name',
      name: 'name',
      phone: 'phone',
      roomNo: 'room_no',
      selected: 'selected',
      staffNo: 'staff_no',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardNo: 'string',
      cardType: 'number',
      costCenterInfoList: { 'type': 'array', 'itemType': HotelOrderDetailInfoResponseBodyModuleOccupantInfoListCostCenterInfoList },
      customerType: 'number',
      departmentId: 'string',
      departmentName: 'string',
      email: 'string',
      employeeType: 'number',
      firstName: 'string',
      isBooker: 'boolean',
      lastName: 'string',
      name: 'string',
      phone: 'string',
      roomNo: 'number',
      selected: 'boolean',
      staffNo: 'string',
      userType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.costCenterInfoList)) {
      $dara.Model.validateArray(this.costCenterInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

