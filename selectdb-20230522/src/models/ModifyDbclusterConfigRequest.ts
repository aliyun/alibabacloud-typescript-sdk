// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration file to modify. The value is fixed to be.conf for compute clusters and fe.conf for frontend clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * be.conf
   */
  configKey?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213c8*****-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213c8*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to perform operations on cluster nodes in parallel.
   * 
   * @example
   * false
   */
  parallelOperation?: boolean;
  /**
   * @remarks
   * The JSON string of parameters and their values.
   * 
   * This parameter is required.
   * 
   * @example
   * {"param1_name":"param1_value","param2_name":"param2_value"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The upgrade mode. If you leave this parameter empty, the upgrade is performed immediately. If you set this parameter to 1, the upgrade is performed during the maintenance window.
   * 
   * @example
   * 1
   */
  switchTimeMode?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
      parallelOperation: 'ParallelOperation',
      parameters: 'Parameters',
      regionId: 'RegionId',
      switchTimeMode: 'SwitchTimeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      DBClusterId: 'string',
      DBInstanceId: 'string',
      parallelOperation: 'boolean',
      parameters: 'string',
      regionId: 'string',
      switchTimeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

