// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * 需修改的实例参数，格式为JSON，修改后的值会覆盖原来的值。例如您只希望修改**maxmemory-policy**参数为**noeviction**，您可以传入`{"maxmemory-policy":"noeviction"}`。
   * > 关于各参数的详细说明，请参见[参数说明](https://help.aliyun.com/document_detail/259681.html)。
   * 
   * @example
   * {"maxmemory-policy":"volatile-lru","zset-max-ziplist-entries":128,"zset-max-ziplist-value":64,"hash-max-ziplist-entries":512,"set-max-intset-entries":512}
   */
  config?: string;
  /**
   * @remarks
   * 实例ID。
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
   * 哨兵兼容模式，适用于非集群实例。取值说明：
   * * **no**（默认）：未开启
   * * **yes**：开启
   * > 更多信息请参见[Sentinel兼容模式](https://help.aliyun.com/document_detail/178911.html)。
   * 
   * @example
   * yes
   */
  paramNoLooseSentinelEnabled?: string;
  /**
   * @remarks
   * 开启哨兵模式时，是否允许免密执行Sentinel相关命令，取值说明：
   * * **no**（默认）：关闭。
   * * **yes**：开启。开启后，可以在任意连接上免密执行Sentinel命令以及使用SENTINEL命令监听+switch-master通道。
   * 
   * @example
   * ****
   */
  paramNoLooseSentinelPasswordFreeAccess?: string;
  /**
   * @remarks
   * 启用哨兵模式及ParamNoLooseSentinelPasswordFreeAccess参数后，可通过本参数添加额外的免密命令列表（默认为空）。
   * > * 设置后可在任意连接上无需密码执行对应命令，请谨慎操作。
   * > * 命令需使用小写字母，多个命令以英文逗号(,)分隔。
   * 
   * @example
   * ****
   */
  paramNoLooseSentinelPasswordFreeCommands?: string;
  /**
   * @remarks
   * 同步模式：
   * * **async**（默认）：异步
   * * **semisync**：半同步
   * 
   * @example
   * async
   */
  paramReplMode?: string;
  /**
   * @remarks
   * 半同步模式的降级阈值。仅半同步支持配置该参数，单位为ms，取值范围为10~60000，默认为500。
   * > * 当同步延迟超出该阈值时，同步模式会自动转为异步，当同步延迟消除后，同步模式会自动转换为半同步。
   * > * 仅Tair企业版实例支持，该功能公测中。
   * 
   * @example
   * 500
   */
  paramSemisyncReplTimeout?: string;
  /**
   * @remarks
   * 哨兵兼容模式，适用于集群架构代理连接模式或读写分离架构的实例，取值说明：
   * * **0**（默认）：未开启
   * * **1**：开启
   * > 更多信息请参见[Sentinel兼容模式](https://help.aliyun.com/document_detail/178911.html)。
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

