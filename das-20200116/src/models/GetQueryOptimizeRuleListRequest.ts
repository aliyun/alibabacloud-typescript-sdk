// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeRuleListRequest extends $dara.Model {
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
   * >  If your instances reside in the regions in the Chinese mainland, set this parameter to **cn-china**.
   * 
   * @example
   * cn-china
   */
  region?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  tagNames?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      instanceIds: 'InstanceIds',
      region: 'Region',
      tagNames: 'TagNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      instanceIds: 'string',
      region: 'string',
      tagNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

