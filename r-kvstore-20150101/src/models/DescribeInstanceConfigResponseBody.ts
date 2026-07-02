// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The default configuration parameters of the instance. To view the full list of parameters, call the [DescribeParameters](https://help.aliyun.com/document_detail/473847.html) operation.
   * 
   * @example
   * {\\"EvictionPolicy\\":\\"volatile-lru\\",\\"hash-max-ziplist-entries\\":512,\\"zset-max-ziplist-entries\\":128,\\"list-max-ziplist-entries\\":512,\\"list-max-ziplist-value\\":64,\\"zset-max-ziplist-value\\":64,\\"set-max-intset-entries\\":512,\\"hash-max-ziplist-value\\":64}
   */
  config?: string;
  /**
   * @remarks
   * Specifies whether to enable Sentinel compatibility mode. This parameter applies only to non-cluster instances. Valid values:
   * 
   * - **no** (default): Disabled
   * 
   * - **yes**: Enabled
   * 
   * > For more information, see [Sentinel compatibility mode](https://help.aliyun.com/document_detail/178911.html).
   * 
   * @example
   * no
   */
  paramNoLooseSentinelEnabled?: string;
  /**
   * @remarks
   * Specifies whether to allow password-free execution of Sentinel commands when Sentinel compatibility mode is enabled. Valid values:
   * 
   * - **no** (default): Disabled.
   * 
   * - **yes**: Enabled. Allows you to run Sentinel commands on any connection without a password and use the `SENTINEL` command to subscribe to the `+switch-master` channel.
   * 
   * @example
   * no
   */
  paramNoLooseSentinelPasswordFreeAccess?: string;
  /**
   * @remarks
   * Additional commands that can be run without a password. This parameter is valid only when Sentinel compatibility mode is enabled and `ParamNoLooseSentinelPasswordFreeAccess` is set to `yes`. By default, this parameter is empty.
   * 
   * @example
   * ****
   */
  paramNoLooseSentinelPasswordFreeCommands?: string;
  /**
   * @remarks
   * The replication mode. Valid values:
   * 
   * - **async** (default): asynchronous mode
   * 
   * - **semisync**: semi-synchronous mode
   * 
   * @example
   * async
   */
  paramReplMode?: string;
  /**
   * @remarks
   * The degradation threshold for the semi-synchronous mode. This parameter is valid only in semi-synchronous mode. Unit: milliseconds. Valid values: 10 to 60000. Default value: 500.
   * 
   * > If replication latency exceeds this threshold, the replication mode degrades to asynchronous mode. When the replication latency returns to normal, the mode reverts to semi-synchronous mode.
   * 
   * @example
   * 500
   */
  paramReplTimeout?: string;
  /**
   * @remarks
   * Specifies whether to enable Sentinel compatibility mode. This parameter applies to instances that use the cluster architecture with proxy connection mode or the read/write splitting architecture. Valid values:
   * 
   * - **0** (default): Disabled
   * 
   * - **1**: Enabled
   * 
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

