// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesByPerformanceResponseBodyItemsDBInstancePerformance extends $dara.Model {
  /**
   * @remarks
   * The CPU utilization of the instance in percentage.
   * 
   * @example
   * 0.70
   */
  CPUUsage?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * DatabaseTest
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-uf6wjk5xxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The disk usage of the instance in percentage.
   * 
   * @example
   * 14.56
   */
  diskUsage?: string;
  /**
   * @remarks
   * The IOPS usage of the instance in percentage.
   * 
   * @example
   * 0.15
   */
  IOPSUsage?: string;
  /**
   * @remarks
   * The number of sessions.
   * 
   * @example
   * 0.10
   */
  sessionUsage?: string;
  static names(): { [key: string]: string } {
    return {
      CPUUsage: 'CPUUsage',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      diskUsage: 'DiskUsage',
      IOPSUsage: 'IOPSUsage',
      sessionUsage: 'SessionUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUUsage: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      diskUsage: 'string',
      IOPSUsage: 'string',
      sessionUsage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

