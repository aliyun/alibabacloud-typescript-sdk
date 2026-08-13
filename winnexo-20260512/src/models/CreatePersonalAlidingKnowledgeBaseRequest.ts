// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreatePersonalAlidingKnowledgeBaseRequestObjectBindings extends $dara.Model {
  /**
   * @remarks
   * 绑定对象 ID
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * 绑定对象类型，例如 CUSTOMER / OPPORTUNITY
   * 
   * @example
   * string_value
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      objectId: 'objectId',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectId: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePersonalAlidingKnowledgeBaseRequestSyncConfig extends $dara.Model {
  /**
   * @remarks
   * cron 表达式；enabled=true 时必填，enabled=false 时忽略
   * 
   * @example
   * string_value
   */
  cron?: string;
  /**
   * @remarks
   * 是否启用定时同步
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      cron: 'cron',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePersonalAlidingKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * 目标个人目录 ID；不传时自动绑定到用户默认根目录，传入时必须是当前用户的已有个人目录（PERSONAL）
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 知识库显示名称；不传时由后台从远程拉取的根节点名称回填
   * 
   * @example
   * string_value
   */
  kbName?: string;
  /**
   * @remarks
   * 阿里钉知识库的可公开访问 URL
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  kbUrl?: string;
  objectBindings?: CreatePersonalAlidingKnowledgeBaseRequestObjectBindings[];
  /**
   * @remarks
   * Agent 命名空间标识，可选
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  syncConfig?: CreatePersonalAlidingKnowledgeBaseRequestSyncConfig;
  /**
   * @remarks
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      kbName: 'kbName',
      kbUrl: 'kbUrl',
      objectBindings: 'objectBindings',
      operatingObjectName: 'operatingObjectName',
      syncConfig: 'syncConfig',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      kbName: 'string',
      kbUrl: 'string',
      objectBindings: { 'type': 'array', 'itemType': CreatePersonalAlidingKnowledgeBaseRequestObjectBindings },
      operatingObjectName: 'string',
      syncConfig: CreatePersonalAlidingKnowledgeBaseRequestSyncConfig,
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectBindings)) {
      $dara.Model.validateArray(this.objectBindings);
    }
    if(this.syncConfig && typeof (this.syncConfig as any).validate === 'function') {
      (this.syncConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

