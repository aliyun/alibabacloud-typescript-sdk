// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalDingtalkMinutesRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the pipeline.
   * 
   * @example
   * Sample description
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
   * The name of the worksheet.
   * 
   * This parameter is required.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The meeting notes content (optional). The notes are used for auxiliary analysis.
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
   * 692318833855074
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

