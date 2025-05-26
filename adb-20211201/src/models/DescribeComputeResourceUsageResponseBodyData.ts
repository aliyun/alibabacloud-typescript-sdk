// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeComputeResourceUsageResponseBodyDataAcuInfo } from "./DescribeComputeResourceUsageResponseBodyDataAcuInfo";


export class DescribeComputeResourceUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AnalyticDB compute unit (ACU) usage of the cluster.
   */
  acuInfo?: DescribeComputeResourceUsageResponseBodyDataAcuInfo[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-clusterxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2023-06-07T02:37:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The type of the resource group.
   * 
   * @example
   * interative
   */
  resourceGroupType?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-04-24T07:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      acuInfo: 'AcuInfo',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      resourceGroupName: 'ResourceGroupName',
      resourceGroupType: 'ResourceGroupType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acuInfo: { 'type': 'array', 'itemType': DescribeComputeResourceUsageResponseBodyDataAcuInfo },
      DBClusterId: 'string',
      endTime: 'string',
      resourceGroupName: 'string',
      resourceGroupType: 'string',
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

