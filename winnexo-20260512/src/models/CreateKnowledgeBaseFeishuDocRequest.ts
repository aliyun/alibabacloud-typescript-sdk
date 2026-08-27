// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseFeishuDocRequestObjectBindings extends $dara.Model {
  /**
   * @remarks
   * The name of the semantic graph to which the object belongs.
   * 
   * @example
   * crm
   */
  graphName?: string;
  /**
   * @remarks
   * The ID of the recommended item, which can be a **feedId** or a mini-app ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  objectId?: string;
  /**
   * @remarks
   * The advanced field type.
   * 
   * This parameter is required.
   * 
   * @example
   * customer
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      graphName: 'graphName',
      objectId: 'objectId',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphName: 'string',
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

export class CreateKnowledgeBaseFeishuDocRequestSyncConfig extends $dara.Model {
  /**
   * @remarks
   * The cron expression for the timed scheduling task.
   * 
   * @example
   * 0 * * * *
   */
  cron?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable synchronization.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The synchronization preset: hourly or daily_2am.
   * 
   * @example
   * custom
   */
  preset?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'cron',
      enabled: 'enabled',
      preset: 'preset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      enabled: 'boolean',
      preset: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseFeishuDocRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the alias.
   * 
   * @example
   * Enterprise policy document
   */
  description?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dir_tenant_kb_child
   */
  directoryId?: string;
  /**
   * @remarks
   * The document URL.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.feishu.cn/docx/doxcnExample
   */
  docUrl?: string;
  /**
   * @remarks
   * The mirror name.
   * 
   * @example
   * Enterprise Policy
   */
  name?: string;
  /**
   * @remarks
   * The meeting notes content (optional). Used for auxiliary analysis.
   * 
   * @example
   * Extract applicable scope and key clauses
   */
  notes?: string;
  /**
   * @remarks
   * The object bindings.
   */
  objectBindings?: CreateKnowledgeBaseFeishuDocRequestObjectBindings[];
  /**
   * @remarks
   * The digital employee name (operating object name, optional).
   * 
   * @example
   * Enterprise Knowledge Assistant
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The resource tags (optional, a JSON string list such as ["tagA","tagB"]).
   * 
   * @example
   * ["policy"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * The synchronization settings.
   */
  syncConfig?: CreateKnowledgeBaseFeishuDocRequestSyncConfig;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      docUrl: 'docUrl',
      name: 'name',
      notes: 'notes',
      objectBindings: 'objectBindings',
      operatingObjectName: 'operatingObjectName',
      sourceTags: 'sourceTags',
      syncConfig: 'syncConfig',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      docUrl: 'string',
      name: 'string',
      notes: 'string',
      objectBindings: { 'type': 'array', 'itemType': CreateKnowledgeBaseFeishuDocRequestObjectBindings },
      operatingObjectName: 'string',
      sourceTags: 'string',
      syncConfig: CreateKnowledgeBaseFeishuDocRequestSyncConfig,
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

