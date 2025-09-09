// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRDSPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * mysql
   */
  dbInstType?: string;
  /**
   * @remarks
   * The ID of the Distributed Relational Database Service (DRDS) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the UNIX timestamp format. The time must be in UTC. Unit: ms.
   * 
   * @example
   * 1603209690000
   */
  endTime?: number;
  /**
   * @remarks
   * The performance monitoring metrics. You can specify one or more metrics for a query at a time. Separate multiple metric parameters with commas (,).
   * 
   * >  For more information about the details of performance monitoring metrics, see [Storage monitoring](https://help.aliyun.com/document_detail/186705.html).
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL_MemCpuUsage
   */
  keys?: string;
  /**
   * @remarks
   * The ID of the storage-layer ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-************
   */
  rdsInstanceId?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the UNIX timestamp format. The time must be in UTC. Unit: ms.
   * 
   * @example
   * 1603123290000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      keys: 'Keys',
      rdsInstanceId: 'RdsInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      drdsInstanceId: 'string',
      endTime: 'number',
      keys: 'string',
      rdsInstanceId: 'string',
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

