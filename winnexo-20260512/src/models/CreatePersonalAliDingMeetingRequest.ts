// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalAliDingMeetingRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the AI assistant.
   * 
   * @example
   * controll service user
   */
  description?: string;
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
   * The name of the image-trained digital human.
   * 
   * This parameter is required.
   * 
   * @example
   * p-toolset-3dcef7ca-31b9-4d1c-8692-1ef03099cad3
   */
  name?: string;
  /**
   * @remarks
   * The meeting notes (optional). The notes are used for auxiliary analysis.
   * 
   * @example
   * string_value
   */
  notes?: string;
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
   * The original Shanji link (required).
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  shanjiUrl?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 549003315603714
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      name: 'name',
      notes: 'notes',
      operatingObjectName: 'operatingObjectName',
      shanjiUrl: 'shanjiUrl',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      name: 'string',
      notes: 'string',
      operatingObjectName: 'string',
      shanjiUrl: 'string',
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

