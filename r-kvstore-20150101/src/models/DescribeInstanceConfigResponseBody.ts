// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The default configuration parameters of the instance. For more comprehensive parameter configurations, call the [Describeparamters](https://help.aliyun.com/document_detail/473847.html) operation.
   * 
   * @example
   * {\\"EvictionPolicy\\":\\"volatile-lru\\",\\"hash-max-ziplist-entries\\":512,\\"zset-max-ziplist-entries\\":128,\\"list-max-ziplist-entries\\":512,\\"list-max-ziplist-value\\":64,\\"zset-max-ziplist-value\\":64,\\"set-max-intset-entries\\":512,\\"hash-max-ziplist-value\\":64}
   */
  config?: string;
  /**
   * @remarks
   * The Sentinel compatibility mode, which applies to non-cluster instances. Valid values:
   * * **no**: disabled. This is the default value.
   * * **yes**: enabled.
   * > For more information, see [Sentinel compatibility mode](https://help.aliyun.com/document_detail/178911.html).
   * 
   * @example
   * no
   */
  paramNoLooseSentinelEnabled?: string;
  /**
   * @remarks
   * Specifies whether to allow password-free execution of Sentinel-related commands when the Sentinel mode is enabled. Valid values:
   * * **no**: disabled. This is the default value.
   * * **yes**: enabled. After this feature is enabled, you can execute Sentinel commands without a password on any connection and use the SENTINEL command to monitor the +switch-master channel.
   * 
   * @example
   * no
   */
  paramNoLooseSentinelPasswordFreeAccess?: string;
  /**
   * @remarks
   * The list of additional password-free commands. After the Sentinel mode and the ParamNoLooseSentinelPasswordFreeAccess parameter are enabled, you can use this parameter to add extra password-free commands. Default value: empty.
   * 
   * @example
   * ****
   */
  paramNoLooseSentinelPasswordFreeCommands?: string;
  /**
   * @remarks
   * The synchronization mode. Valid values:
   * * **async**: asynchronous mode. This is the default value.
   * * **semisync**: semi-synchronous mode.
   * 
   * @example
   * async
   */
  paramReplMode?: string;
  /**
   * @remarks
   * The degradation threshold for the semi-synchronous mode. This parameter can be configured only when the semi-synchronous mode is used. Unit: milliseconds. Valid values: 10 to 60000. Default value: 500.
   * > When the synchronization latency exceeds this threshold, the synchronization mode automatically degrades to the asynchronous mode. After the synchronization latency is eliminated, the synchronization mode automatically switches back to the semi-synchronous mode.
   * 
   * @example
   * 500
   */
  paramReplTimeout?: string;
  /**
   * @remarks
   * The Sentinel compatibility mode, which applies to instances in the cluster architecture proxy mode or read/write splitting architecture. Valid values:
   * * **0**: disabled. This is the default value.
   * * **1**: enabled.
   * > For more information, see [Sentinel compatibility mode](https://help.aliyun.com/document_detail/178911.html).
   * 
   * @example
   * 0
   */
  paramSentinelCompatEnable?: string;
  /**
   * @remarks
   * The ID of the request.
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

