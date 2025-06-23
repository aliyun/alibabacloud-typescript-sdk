// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemLogRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The bills of the burstable clean bandwidth that are issued before this point in time are queried. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1640966400000
   */
  endTime?: number;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * > You can call the [DescribeInstanceDetails](https://help.aliyun.com/document_detail/91490.html) operation to query the IP addresses of all instances.
   * 
   * @example
   * 203.107.XX.XX
   */
  entityObject?: string;
  /**
   * @remarks
   * The type of the system log. Set the value to **20**, which indicates the billing logs for the burstable clean bandwidth.
   * 
   * > You must specify this parameter. Otherwise, the call fails.
   * 
   * @example
   * 20
   */
  entityType?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The bills of the burstable clean bandwidth that are issued after this point in time are queried. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1609430400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      entityObject: 'EntityObject',
      entityType: 'EntityType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      entityObject: 'string',
      entityType: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

