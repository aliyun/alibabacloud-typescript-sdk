// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportKgSchemaResponseBodySchemaInfo extends $dara.Model {
  /**
   * @remarks
   * The knowledge graph definition content converted based on the specified format.
   * 
   * @example
   * workspaceId: f1d4559a4db044158305e2d89bccf81f
   * name: jytest
   */
  content?: string;
  /**
   * @remarks
   * The format of the returned knowledge graph definition content. Valid values: json and yaml.
   * 
   * @example
   * yaml
   */
  outputFormat?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      outputFormat: 'OutputFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      outputFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportKgSchemaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * The knowledge graph definition details.
   */
  schemaInfo?: ExportKgSchemaResponseBodySchemaInfo;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      schemaInfo: 'SchemaInfo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      schemaInfo: ExportKgSchemaResponseBodySchemaInfo,
      success: 'boolean',
    };
  }

  validate() {
    if(this.schemaInfo && typeof (this.schemaInfo as any).validate === 'function') {
      (this.schemaInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

