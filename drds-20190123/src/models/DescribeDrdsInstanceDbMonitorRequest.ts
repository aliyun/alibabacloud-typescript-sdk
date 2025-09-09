// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsInstanceDbMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the Distributed Relational Database Service (DRDS) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The end time. Specify the time in the UNIX timestamp format. The time must be in UTC. Unit: ms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1603166400000
   */
  endTime?: number;
  /**
   * @remarks
   * The performance monitoring metrics. You can specify one or more metrics for a query at a time. Separate multiple metric parameters with commas (,).
   * 
   * >  For more information about the details of performance monitoring metrics, see [Database monitoring](https://help.aliyun.com/document_detail/186704.html).
   * 
   * This parameter is required.
   * 
   * @example
   * qps
   */
  key?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time. Specify the time in the UNIX timestamp format. The time must be in UTC. Unit: ms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1603162800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      key: 'Key',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      endTime: 'number',
      key: 'string',
      regionId: 'string',
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

