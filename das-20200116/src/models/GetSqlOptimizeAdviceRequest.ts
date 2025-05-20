// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlOptimizeAdviceRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  consoleContext?: string;
  /**
   * @remarks
   * The end date of the time range to query. Specify the date in the *yyyyMMdd* format. The time must be in UTC.
   * 
   * *   The default value of this parameter is one day before the current day.
   * *   The value must be earlier than the current day. The interval between the start date and the end date cannot exceed 30 days.
   * 
   * @example
   * 20210917
   */
  endDt?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **MySQL**: ApsaraDB RDS for MySQL.
   * *   **PolarDBMySQL**: PolarDB for MySQL.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  You must specify the instance ID only if your database instance is an ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region in which the instance resides. Valid values:
   * 
   * *   **cn-china**: Chinese mainland.
   * *   **cn-hongkong**: China (Hong Kong).
   * *   **ap-southeast-1**: Singapore.
   * 
   * This parameter takes effect only if **InstanceIds** is left empty. If you leave **InstanceIds** empty, the system obtains data from the region specified by **Region**. By default, Region is set to **cn-china**. If you specify **InstanceIds**, **Region** does not take effect, and the system obtains data from the region in which the first specified instance resides.****
   * 
   * >  If your instances reside in the regions inside the Chinese mainland, set this parameter to **cn-china**.
   * 
   * @example
   * cn-china
   */
  region?: string;
  /**
   * @remarks
   * The start date of the time range to query. Specify the date in the *yyyyMMdd* format. The time must be in UTC.
   * 
   * *   The default value of this parameter is one day before the current day.
   * *   The value must be earlier than the current day.
   * 
   * @example
   * 20210916
   */
  startDt?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      endDt: 'EndDt',
      engine: 'Engine',
      instanceIds: 'InstanceIds',
      region: 'Region',
      startDt: 'StartDt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      endDt: 'string',
      engine: 'string',
      instanceIds: 'string',
      region: 'string',
      startDt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

