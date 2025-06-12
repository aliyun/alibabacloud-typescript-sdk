// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  documentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d278629c-c687-4aa3-b044-4fe9b012****
   */
  instanceId?: string;
  /**
   * @example
   * DE803553-8AA9-4B9D-9E4E-A82BC69EDCEE
   */
  requestId?: string;
  /**
   * @remarks
   * schema id
   * 
   * This parameter is required.
   * 
   * @example
   * profile
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      documentId: 'DocumentId',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentId: 'string',
      instanceId: 'string',
      requestId: 'string',
      schemaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

