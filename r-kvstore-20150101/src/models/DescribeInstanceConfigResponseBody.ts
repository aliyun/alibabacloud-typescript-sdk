// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameter settings of the instance. For more information, see [Parameter overview and configuration guide](https://help.aliyun.com/document_detail/43885.html).
   * 
   * @example
   * {\\"EvictionPolicy\\":\\"volatile-lru\\",\\"hash-max-ziplist-entries\\":512,\\"zset-max-ziplist-entries\\":128,\\"list-max-ziplist-entries\\":512,\\"list-max-ziplist-value\\":64,\\"zset-max-ziplist-value\\":64,\\"set-max-intset-entries\\":512,\\"hash-max-ziplist-value\\":64}
   */
  config?: string;
  /**
   * @remarks
   * The Sentinel-compatible mode, which is applicable to non-cluster instances. For more information about the parameter, see the relevant documentation.
   * 
   * @example
   * ****
   */
  paramNoLooseSentinelEnabled?: string;
  /**
   * @remarks
   * Indicates whether Sentinel commands can be run without requiring a password when the Sentinel mode is enabled. Valid values: Valid values: yes and no. Default value: no. After you set this parameter to yes, you can run Sentinel commands in a virtual private cloud (VPC) without the need to enable the password-free access feature.
   * 
   * @example
   * no
   */
  paramNoLooseSentinelPasswordFreeAccess?: string;
  /**
   * @remarks
   * After you enable the Sentinel mode and set the ParamNoLooseSentinelPasswordFreeAccess parameter to yes, you can use this parameter to specify an additional list of commands that can be run without requiring a password. By default, this parameter is empty. After you configure this parameter, you can run the specified commands without a password on any connection. Proceed with caution. The commands must be written in lowercase letters. Multiple commands are separated by commas (,).
   * 
   * @example
   * ****
   */
  paramNoLooseSentinelPasswordFreeCommands?: string;
  /**
   * @remarks
   * The synchronization mode.
   * 
   * *   **semisync**
   * *   **async**
   * 
   * @example
   * async
   */
  paramReplMode?: string;
  /**
   * @remarks
   * The degradation threshold time of the semi-synchronous replication mode. This parameter is required only when semi-synchronous replication is enabled. Unit: milliseconds. Valid values: 10 to 60000.
   * 
   * @example
   * ****
   */
  paramReplTimeout?: string;
  /**
   * @remarks
   * The Sentinel-compatible mode, which is applicable to cluster instances in proxy mode or read/write splitting instances. For more information about the parameter, see the relevant documentation.
   * 
   * @example
   * 1
   */
  paramSentinelCompatEnable?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E2C08F6-2D11-4ECD-9A4C-27EF2D3D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      paramNoLooseSentinelEnabled: 'ParamNoLooseSentinelEnabled',
      paramNoLooseSentinelPasswordFreeAccess: 'ParamNoLooseSentinelPasswordFreeAccess',
      paramNoLooseSentinelPasswordFreeCommands: 'ParamNoLooseSentinelPasswordFreeCommands',
      paramReplMode: 'ParamReplMode',
      paramReplTimeout: 'ParamReplTimeout',
      paramSentinelCompatEnable: 'ParamSentinelCompatEnable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      paramNoLooseSentinelEnabled: 'string',
      paramNoLooseSentinelPasswordFreeAccess: 'string',
      paramNoLooseSentinelPasswordFreeCommands: 'string',
      paramReplMode: 'string',
      paramReplTimeout: 'string',
      paramSentinelCompatEnable: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

