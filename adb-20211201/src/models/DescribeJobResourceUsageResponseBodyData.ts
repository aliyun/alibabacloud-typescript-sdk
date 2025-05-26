// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeJobResourceUsageResponseBodyDataJobAcuUsage } from "./DescribeJobResourceUsageResponseBodyDataJobAcuUsage";


export class DescribeJobResourceUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-clusterxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-23T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The AnalyticDB compute unit (ACU) usage of the job resource group.
   */
  jobAcuUsage?: DescribeJobResourceUsageResponseBodyDataJobAcuUsage[];
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-22T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      jobAcuUsage: 'JobAcuUsage',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      jobAcuUsage: { 'type': 'array', 'itemType': DescribeJobResourceUsageResponseBodyDataJobAcuUsage },
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobAcuUsage)) {
      $dara.Model.validateArray(this.jobAcuUsage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

