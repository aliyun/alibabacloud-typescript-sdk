// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration item to modify. For more information, see [Compute layer variables](https://help.aliyun.com/document_detail/316576.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ENABLE_CONSISTENT_REPLICA_READ
   */
  configName?: string;
  /**
   * @remarks
   * If configName is set to ENABLE_CONSISTENT_REPLICA_READ, the valid values are "true" and "false".
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  configValue?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-hzjasd****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      configValue: 'ConfigValue',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      configValue: 'string',
      DBInstanceName: 'string',
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

