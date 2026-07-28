// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration file to modify. For compute clusters, it is fixed as be.conf. For fe clusters, it is fixed as fe.conf.
   * 
   * This parameter is required.
   * 
   * @example
   * be.conf
   */
  configKey?: string;
  /**
   * @remarks
   * Cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213c8*****-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213c8*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Whether to operate cluster nodes in parallel
   * 
   * @example
   * false
   */
  parallelOperation?: boolean;
  /**
   * @remarks
   * JSON string of parameters and parameter values.
   * 
   * This parameter is required.
   * 
   * @example
   * {"param1_name":"param1_value","param2_name":"param2_value"}
   */
  parameters?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Upgrade method. If not specified, the upgrade will be performed immediately. If set to 1, the upgrade will be performed during the maintenance window.
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

