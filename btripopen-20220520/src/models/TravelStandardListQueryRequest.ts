// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardListQueryRequest extends $dara.Model {
  /**
   * @remarks
   * Applicable to parent-subsidiary enterprises. Set this parameter to true to query the unified group travel standards. If left empty, the system returns the travel rules that are currently in effect for the enterprise.
   * 
   * @example
   * false
   */
  fromGroup?: boolean;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the travel standard to search for.
   * 
   * @example
   * 普通员工规则
   */
  ruleName?: string;
  /**
   * @remarks
   * The user ID. Specify this parameter to query the travel standards bound to an employee.
   * 
   * @example
   * user_1234
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      fromGroup: 'from_group',
      pageNo: 'page_no',
      pageSize: 'page_size',
      ruleName: 'rule_name',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromGroup: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      ruleName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

