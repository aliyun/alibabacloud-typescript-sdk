// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStorageResourceUsageResponseBodyDataAcuInfo } from "./DescribeStorageResourceUsageResponseBodyDataAcuInfo";


export class DescribeStorageResourceUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AnalyticDB compute unit (ACU) usage of the cluster.
   */
  acuInfo?: DescribeStorageResourceUsageResponseBodyDataAcuInfo[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-bp1bg858bo8c****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-23T01:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-08-22T01:06:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      acuInfo: 'AcuInfo',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acuInfo: { 'type': 'array', 'itemType': DescribeStorageResourceUsageResponseBodyDataAcuInfo },
      DBClusterId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.acuInfo)) {
      $dara.Model.validateArray(this.acuInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

