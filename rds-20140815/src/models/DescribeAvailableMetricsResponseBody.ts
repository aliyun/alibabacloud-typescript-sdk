// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableMetricsResponseBodyItems } from "./DescribeAvailableMetricsResponseBodyItems";


export class DescribeAvailableMetricsResponseBody extends $dara.Model {
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
   * Details of the Enhanced Monitoring metric.
   */
  items?: DescribeAvailableMetricsResponseBodyItems[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5CD61041-35F7-10F7-BE94-33A48B221218
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of enhanced monitoring metrics that are available for the instance.
   * 
   * @example
   * 4
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
      items: { 'type': 'array', 'itemType': DescribeAvailableMetricsResponseBodyItems },
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

