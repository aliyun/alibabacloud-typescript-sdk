// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLLogCountResponseBodyItems } from "./DescribeSqllogCountResponseBodyItems";


export class DescribeSQLLogCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-xxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query.
   * 
   * @example
   * 2020-12-14T11:22Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the instance.
   */
  items?: DescribeSQLLogCountResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7565770E-7C45-462D-BA4A-8A**********
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 2020-12-12T11:22Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      items: 'Items',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      items: { 'type': 'array', 'itemType': DescribeSQLLogCountResponseBodyItems },
      requestId: 'string',
      startTime: 'string',
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

