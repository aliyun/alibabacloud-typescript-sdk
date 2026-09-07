// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryActiveUserStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The business channel type code.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The end date of the query. The date is in the yyyy-MM-dd format. The maximum value is yesterday (N-1 data).
   * 
   * @example
   * 2024-12-31
   */
  endDate?: string;
  /**
   * @remarks
   * The workspace ID. If specified, only active users within the specified workspace are counted.
   * 
   * @example
   * cn-hangzhou+dir-467671****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The statistical period.
   * 
   * @example
   * day
   */
  period?: string;
  /**
   * @remarks
   * The start date of the query. The date is in the yyyy-MM-dd format. The value cannot be earlier than 6 months ago or later than EndDate.
   * 
   * @example
   * 2024-12-01
   */
  startDate?: string;
  /**
   * @remarks
   * The user group ID. If specified, only active users within the specified user group are counted.
   * 
   * @example
   * ug-12345678
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      endDate: 'EndDate',
      officeSiteId: 'OfficeSiteId',
      period: 'Period',
      startDate: 'StartDate',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      endDate: 'string',
      officeSiteId: 'string',
      period: 'string',
      startDate: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

