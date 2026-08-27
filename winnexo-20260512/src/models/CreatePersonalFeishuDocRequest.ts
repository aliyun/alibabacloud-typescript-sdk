// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalFeishuDocRequestObjectBindings extends $dara.Model {
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

export class CreatePersonalFeishuDocRequestSyncConfig extends $dara.Model {
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

export class CreatePersonalFeishuDocRequest extends $dara.Model {
  /**
   * @remarks
   * The pipeline description.
   * 
   * @example
   * Project design document
   */
  description?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * dir_personal_child
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
   * The updated name of the filter view.
   * 
   * @example
   * ProjectPlan
   */
  name?: string;
  /**
   * @remarks
   * The meeting notes content (optional). The notes are used for auxiliary analysis.
   * 
   * @example
   * Extract decisions and to-dos
   */
  notes?: string;
  /**
   * @remarks
   * The object bindings.
   */
  objectBindings?: CreatePersonalFeishuDocRequestObjectBindings[];
  /**
   * @remarks
   * The digital employee name (operating object name, optional).
   * 
   * @example
   * R&D Assistant
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The resource tags (optional, a JSON string list, such as ["tagA","tagB"]).
   * 
   * @example
   * ["R&D"]
   */
  sourceTags?: string;
  /**
   * @remarks
   * The synchronization settings.
   */
  syncConfig?: CreatePersonalFeishuDocRequestSyncConfig;
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
      objectBindings: { 'type': 'array', 'itemType': CreatePersonalFeishuDocRequestObjectBindings },
      operatingObjectName: 'string',
      sourceTags: 'string',
      syncConfig: CreatePersonalFeishuDocRequestSyncConfig,
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

