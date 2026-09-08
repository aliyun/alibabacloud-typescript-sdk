// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * Document ID
   * 
   * @example
   * xxx
   */
  documentId?: string;
  /**
   * @remarks
   * The document content to save. It must conform to the rules defined in the schema.
   * 
   * This parameter is required.
   * 
   * @example
   * {"name":"tom"}
   */
  documentJson?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9cfad875-6260-4a53-ab6e-b13e3fb31f7d
   */
  instanceId?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * EAF3C248-E123-441B-A545-B6CD02E98EED
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
      documentJson: 'DocumentJson',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentId: 'string',
      documentJson: 'string',
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

