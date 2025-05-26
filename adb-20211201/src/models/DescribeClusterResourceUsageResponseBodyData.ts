// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterResourceUsageResponseBodyDataAcuInfo } from "./DescribeClusterResourceUsageResponseBodyDataAcuInfo";


export class DescribeClusterResourceUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AnalyticDB compute unit (ACU) usage of the cluster.
   */
  acuInfo?: DescribeClusterResourceUsageResponseBodyDataAcuInfo[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-uf6dj23rt5zo9s9d
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-23T02:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-14T03:42:15Z
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
      acuInfo: { 'type': 'array', 'itemType': DescribeClusterResourceUsageResponseBodyDataAcuInfo },
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

