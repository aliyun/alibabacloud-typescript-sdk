// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceVncUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **mssql**: SQL Server
   * *   **mysql**: MySQL
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rc-e6e3757b8px27oa5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

