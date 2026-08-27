// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalFeishuDocShrinkRequest extends $dara.Model {
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
  objectBindingsShrink?: string;
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

