// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The default configuration parameters of the instance. For more comprehensive parameter settings, call the [DescribeParameters](https://help.aliyun.com/document_detail/473847.html) operation.
   * 
   * @example
   * {\\"EvictionPolicy\\":\\"volatile-lru\\",\\"hash-max-ziplist-entries\\":512,\\"zset-max-ziplist-entries\\":128,\\"list-max-ziplist-entries\\":512,\\"list-max-ziplist-value\\":64,\\"zset-max-ziplist-value\\":64,\\"set-max-intset-entries\\":512,\\"hash-max-ziplist-value\\":64}
   */
  config?: string;
  /**
   * @remarks
   * The Sentinel compatibility mode. This parameter applies to non-cluster instances. Valid values:
   * 
   * * **no** (default): disabled.
   * * **yes**: enabled.
   * > For more information, see [Sentinel compatibility mode](https://help.aliyun.com/document_detail/178911.html).
   * 
   * @example
   * no
   */
  paramNoLooseSentinelEnabled?: string;
  /**
   * @remarks
   * Specifies whether to allow password-free execution of Sentinel-related commands when Sentinel mode is enabled. Valid values:
   * 
   * * **no** (default): disabled.
   * * **yes**: enabled. After this parameter is enabled, you can run Sentinel commands without a password on any connection and use the SENTINEL command to listen on the +switch-master channel.
   * 
   * @example
   * no
   */
  paramNoLooseSentinelPasswordFreeAccess?: string;
  /**
   * @remarks
   * After Sentinel mode and the ParamNoLooseSentinelPasswordFreeAccess parameter are enabled, you can use this parameter to add additional password-free commands to the list. The default value is empty.
   * 
   * @example
   * ****
   */
  paramNoLooseSentinelPasswordFreeCommands?: string;
  /**
   * @remarks
   * The synchronization mode. Valid values:
   * 
   * * **async** (default): asynchronous mode.
   * * **semisync**: semi-synchronous mode.
   * 
   * @example
   * async
   */
  paramReplMode?: string;
  /**
   * @remarks
   * The degradation threshold for semi-synchronous mode. This parameter can be configured only in semi-synchronous mode. Unit: ms. Valid values: 10 to 60000. Default value: 500.
   * > When the synchronization latency exceeds this threshold, the synchronization mode automatically switches to asynchronous mode. When the synchronization latency is eliminated, the synchronization mode automatically switches back to semi-synchronous mode.
   * 
   * @example
   * 500
   */
  paramReplTimeout?: string;
  /**
   * @remarks
   * The Sentinel compatibility mode. This parameter applies to instances that use the proxy connection mode in cluster architecture or the read/write splitting architecture. Valid values:
   * 
   * * **0** (default): disabled.
   * * **1**: enabled.
   * > For more information, see [Sentinel compatibility mode](https://help.aliyun.com/document_detail/178911.html).
   * 
   * @example
   * 0
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

