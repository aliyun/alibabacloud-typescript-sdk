// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConnectionStringRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-unrf5ssig0ecg8.polarx.huhehaote.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-unrf5ssig0ecg8
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3300
   */
  newPort?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test2
   */
  newPrefix?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceName: 'DBInstanceName',
      newPort: 'NewPort',
      newPrefix: 'NewPrefix',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceName: 'string',
      newPort: 'string',
      newPrefix: 'string',
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

