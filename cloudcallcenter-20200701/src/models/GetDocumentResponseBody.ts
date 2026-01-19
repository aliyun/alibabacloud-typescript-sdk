// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataSchemaPropertiesValue } from "./DataSchemaPropertiesValue";


export class GetDocumentResponseBodyDataSchema extends $dara.Model {
  /**
   * @example
   * 2024-10-16T02:12:12Z
   */
  createdTime?: string;
  /**
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @example
   * terraform-example
   */
  description?: string;
  /**
   * @remarks
   * schame id
   * 
   * @example
   * 400135
   */
  id?: string;
  /**
   * @example
   * 57236c4f-48e9-49ca-a560-8697ec6c185e
   */
  instanceId?: string;
  properties?: { [key: string]: DataSchemaPropertiesValue };
  /**
   * @example
   * 2024-10-16T02:12:12Z
   */
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      deleted: 'Deleted',
      description: 'Description',
      id: 'Id',
      instanceId: 'InstanceId',
      properties: 'Properties',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      deleted: 'boolean',
      description: 'string',
      id: 'string',
      instanceId: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': DataSchemaPropertiesValue },
      updatedTime: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentResponseBodyData extends $dara.Model {
  /**
   * @example
   * {"name":"tom"}
   */
  document?: { [key: string]: any };
  /**
   * @remarks
   * scheme
   */
  schema?: GetDocumentResponseBodyDataSchema;
  static names(): { [key: string]: string } {
    return {
      document: 'Document',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      schema: GetDocumentResponseBodyDataSchema,
    };
  }

  validate() {
    if(this.document) {
      $dara.Model.validateMap(this.document);
    }
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetDocumentResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  params?: string[];
  /**
   * @example
   * 943D8EF3-3321-471F-A104-51C96FCA94D6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDocumentResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

