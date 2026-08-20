// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalAlidingKnowledgeBaseShrinkRequest extends $dara.Model {
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
  objectBindingsShrink?: string;
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
  syncConfigShrink?: string;
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
      objectBindingsShrink: 'objectBindings',
      operatingObjectName: 'operatingObjectName',
      syncConfigShrink: 'syncConfig',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      kbName: 'string',
      kbUrl: 'string',
      objectBindingsShrink: 'string',
      operatingObjectName: 'string',
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

