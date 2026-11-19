// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceSwitchLogRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-uf68f1b5a57exxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. The time is in the <i>yyyy-mm-dd</i>T<i>hh:mm</i>Z format (UTC).
   * 
   * @example
   * 2023-05-28T02:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Valid values: an integer greater than 0 and less than or equal to the maximum value of the INTEGER data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **30**, **50**, and **100**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time of the query. The time is in the <i>yyyy-mm-dd</i>T<i>hh:mm</i>Z format (UTC).
   * 
   * @example
   * 2023-05-27T02:46Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

