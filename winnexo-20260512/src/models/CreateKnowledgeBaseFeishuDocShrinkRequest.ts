// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseFeishuDocShrinkRequest extends $dara.Model {
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
  objectBindingsShrink?: string;
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
  syncConfigShrink?: string;
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
      objectBindingsShrink: 'objectBindings',
      operatingObjectName: 'operatingObjectName',
      sourceTags: 'sourceTags',
      syncConfigShrink: 'syncConfig',
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
      objectBindingsShrink: 'string',
      operatingObjectName: 'string',
      sourceTags: 'string',
      syncConfigShrink: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

