// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalAlidingKnowledgeBaseRequestObjectBindings extends $dara.Model {
  /**
   * @remarks
   * The ID of the recommended item, which can be a **feedId** or a micro-application ID.
   * 
   * @example
   * 2676
   */
  objectId?: string;
  /**
   * @remarks
   * The advanced field type.
   * 
   * @example
   * table
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
   * The cron expression for timed scheduling.
   * 
   * @example
   * string_value
   */
  cron?: string;
  /**
   * @remarks
   * Specifies whether to enable synchronization.
   * 
   * @example
   * False
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
   * The directory ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The display name of the knowledge base. If not provided, the name is populated from the root node name pulled from the remote source.
   * 
   * @example
   * string_value
   */
  kbName?: string;
  /**
   * @remarks
   * The publicly accessible URL of the AliDing knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  kbUrl?: string;
  /**
   * @remarks
   * The object bindings.
   */
  objectBindings?: CreatePersonalAlidingKnowledgeBaseRequestObjectBindings[];
  /**
   * @remarks
   * The name of the digital employee (operating object name, optional).
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The synchronization settings.
   */
  syncConfig?: CreatePersonalAlidingKnowledgeBaseRequestSyncConfig;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * PiPklI1iSRTm6VFFqlY9VzbgiEiE
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

