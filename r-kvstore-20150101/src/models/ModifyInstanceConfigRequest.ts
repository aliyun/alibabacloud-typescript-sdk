// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The instance parameters to be modified in JSON format. The modified values overwrite the original values. For example, to modify only the **maxmemory-policy** parameter to **noeviction**, you can pass `{"maxmemory-policy":"noeviction"}`.
   * > For more information about each parameter, see [Parameter description](https://help.aliyun.com/document_detail/259681.html).
   * 
   * @example
   * {"maxmemory-policy":"volatile-lru","zset-max-ziplist-entries":128,"zset-max-ziplist-value":64,"hash-max-ziplist-entries":512,"set-max-intset-entries":512}
   */
  config?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to enable Sentinel compatibility mode for non-cluster instances. Valid values:
   * * **no** (default): disabled.
   * * **yes**: enabled.
   * > For more information, see [Sentinel compatibility mode](https://help.aliyun.com/document_detail/178911.html).
   * 
   * @example
   * yes
   */
  paramNoLooseSentinelEnabled?: string;
  /**
   * @remarks
   * Specifies whether to allow password-free execution of Sentinel-related commands when Sentinel mode is enabled. Valid values:
   * * **no** (default): disabled.
   * * **yes**: enabled. After this feature is enabled, you can execute Sentinel commands without a password on any connection and use the SENTINEL command to monitor the +switch-master channel.
   * 
   * @example
   * no
   */
  paramNoLooseSentinelPasswordFreeAccess?: string;
  /**
   * @remarks
   * The list of additional password-free commands. This parameter takes effect only after Sentinel mode and the ParamNoLooseSentinelPasswordFreeAccess parameter are enabled. Default value: empty.
   * > * After this parameter is set, the specified commands can be executed without a password on any connection. Proceed with caution.
   * > * Commands must be in lowercase letters. Separate multiple commands with commas (,).
   * 
   * @example
   * ****
   */
  paramNoLooseSentinelPasswordFreeCommands?: string;
  /**
   * @remarks
   * The synchronization mode. Valid values:
   * * **async** (default): asynchronous.
   * * **semisync**: semi-synchronous.
   * 
   * @example
   * async
   */
  paramReplMode?: string;
  /**
   * @remarks
   * The degradation threshold for the semi-synchronous mode. This parameter is supported only in the semi-synchronous mode. Unit: milliseconds. Valid values: 10 to 60000. Default value: 500.
   * > * When the synchronization latency exceeds this threshold, the synchronization mode automatically switches to asynchronous. When the synchronization latency is eliminated, the synchronization mode automatically switches back to semi-synchronous.
   * > * This feature is supported only by Tair Enterprise instances and is in public preview.
   * 
   * @example
   * 500
   */
  paramSemisyncReplTimeout?: string;
  /**
   * @remarks
   * Specifies whether to enable Sentinel compatibility mode for instances in cluster architecture proxy connection mode or read/write splitting architecture. Valid values:
   * * **0** (default): disabled.
   * * **1**: enabled.
   * > For more information, see [Sentinel compatibility mode](https://help.aliyun.com/document_detail/178911.html).
   * 
   * @example
   * 1
   */
  paramSentinelCompatEnable?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      paramNoLooseSentinelEnabled: 'ParamNoLooseSentinelEnabled',
      paramNoLooseSentinelPasswordFreeAccess: 'ParamNoLooseSentinelPasswordFreeAccess',
      paramNoLooseSentinelPasswordFreeCommands: 'ParamNoLooseSentinelPasswordFreeCommands',
      paramReplMode: 'ParamReplMode',
      paramSemisyncReplTimeout: 'ParamSemisyncReplTimeout',
      paramSentinelCompatEnable: 'ParamSentinelCompatEnable',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      paramNoLooseSentinelEnabled: 'string',
      paramNoLooseSentinelPasswordFreeAccess: 'string',
      paramNoLooseSentinelPasswordFreeCommands: 'string',
      paramReplMode: 'string',
      paramSemisyncReplTimeout: 'string',
      paramSentinelCompatEnable: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

