// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The instance parameters to modify, in JSON format. The new values overwrite the existing values. For example, if you want to set only the **maxmemory-policy** parameter to **noeviction**, pass in `{"maxmemory-policy":"noeviction"}`.
   * > For more information about each parameter, see [Metric description](https://help.aliyun.com/document_detail/259681.html).
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
   * The Sentinel compatibility mode. This parameter applies to non-cluster instances. Valid values:
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
   * * **yes**: enabled. After this parameter is enabled, you can run Sentinel commands without a password on any connection and use the SENTINEL command to listen on the +switch-master channel.
   * 
   * @example
   * ****
   */
  paramNoLooseSentinelPasswordFreeAccess?: string;
  /**
   * @remarks
   * After Sentinel mode and the ParamNoLooseSentinelPasswordFreeAccess parameter are enabled, use this parameter to add additional password-free commands (empty by default).
   * > * After this parameter is set, the specified commands can be run without a password on any connection. Proceed with caution.
   * > * Commands must be in lowercase letters. Separate multiple commands with commas (,).
   * 
   * @example
   * ****
   */
  paramNoLooseSentinelPasswordFreeCommands?: string;
  /**
   * @remarks
   * The synchronization pattern. Valid values:
   * * **async** (default): asynchronous
   * * **semisync**: semi-synchronous.
   * 
   * @example
   * async
   */
  paramReplMode?: string;
  /**
   * @remarks
   * The degradation threshold for semi-synchronous mode. This parameter is supported only in semi-synchronous mode. Unit: ms. Valid values: 10 to 60000. Default value: 500.
   * > * When the synchronization latency exceeds this threshold, the synchronous mode automatically transforms to asynchronous. When the latency is eliminated, the synchronous mode automatically transforms back to semi-synchronous.
   * > * This parameter is supported only by Tair Enterprise instances. This feature is in public preview.
   * 
   * @example
   * 500
   */
  paramSemisyncReplTimeout?: string;
  /**
   * @remarks
   * The Sentinel compatibility mode. This parameter applies to instances that use the proxy connection mode in cluster architecture or instances that use the read/write splitting architecture. Valid values:
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

