// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceMetricsResponseBodyItems } from "./DescribeDbinstanceMetricsResponseBodyItems";


export class DescribeDBInstanceMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp1*****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * An array consisting of the Enhanced Monitoring metrics that are enabled for the instance.
   */
  items?: DescribeDBInstanceMetricsResponseBodyItems[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 318C3754-F6D0-54BB-A55C-23EAA04708B7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of enhanced monitoring metrics that are enabled for the instance.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      items: 'Items',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      items: { 'type': 'array', 'itemType': DescribeDBInstanceMetricsResponseBodyItems },
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

