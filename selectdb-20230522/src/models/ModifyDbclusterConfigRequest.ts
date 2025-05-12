// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * be.conf
   */
  configKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213c8yvv09-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-xxxd8a5h60y
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to perform parallel operations on the cluster node.
   * 
   * @example
   * false
   */
  parallelOperation?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{\\"name\\":\\"param1\\",\\"value\\":\\"1234577777\\"},{\\"name\\":\\"param2\\",\\"value\\":\\"${yyyyMMdd}\\"}]
   */
  parameters?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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

