// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeDataTopRequest extends $dara.Model {
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **PolarDBMySQL**
   * *   **PostgreSQL**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The instance IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region in which the instance resides. Valid values:
   * 
   * *   **cn-china**: Chinese mainland
   * *   **cn-hongkong**: China (Hong Kong)
   * *   **ap-southeast-1**: Singapore
   * 
   * This parameter takes effect only if **InstanceIds** is left empty. If you leave **InstanceIds** empty, the system obtains data from the region set by **Region**. By default, Region is set to **cn-china**. If you specify **InstanceIds**, **Region** does not take effect and the system obtains data from the region in which the first specified instance resides.****
   * 
   * >  Set this parameter to **cn-china** for all your instances that reside in the regions in the Chinese mainland.
   * 
   * @example
   * cn-china
   */
  region?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  tagNames?: string;
  /**
   * @remarks
   * The time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1642953600000
   */
  time?: string;
  /**
   * @remarks
   * The type of instances that you want to query. Valid values:
   * 
   * *   **RED**: the best-performing instances
   * *   **BLACK**: the worst-performing instances
   * 
   * This parameter is required.
   * 
   * @example
   * RED
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      instanceIds: 'InstanceIds',
      region: 'Region',
      tagNames: 'TagNames',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      instanceIds: 'string',
      region: 'string',
      tagNames: 'string',
      time: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

