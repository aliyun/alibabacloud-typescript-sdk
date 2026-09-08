// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataSchemaPropertiesValue } from "./DataSchemaPropertiesValue";


export class ListDocumentsResponseBodyDataSchema extends $dara.Model {
  /**
   * @remarks
   * The time when the schema was created.
   * 
   * @example
   * 2020-10-14T09:53:53Z
   */
  createdTime?: string;
  /**
   * @remarks
   * Indicates whether the schema is deleted.
   * 
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * -
   */
  description?: string;
  /**
   * @remarks
   * The schema ID.
   * 
   * @example
   * profile
   */
  id?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 87b12784-8ce2-40b6-b21f-c49cb3b5501e
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of fields.
   */
  properties?: { [key: string]: DataSchemaPropertiesValue };
  /**
   * @remarks
   * The time when the schema was last updated.
   * 
   * @example
   * 2020-10-14T09:53:53Z
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

export class ListDocumentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of documents.
   */
  documents?: { [key: string]: any }[];
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * 54d1a616d95a4a01ba58967a9115b649
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The schema.
   */
  schema?: ListDocumentsResponseBodyDataSchema;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
      nextPageToken: 'NextPageToken',
      schema: 'Schema',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      nextPageToken: 'string',
      schema: ListDocumentsResponseBodyDataSchema,
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
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

export class ListDocumentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: ListDocumentsResponseBodyData;
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
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The response parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BEEA660-A45A-45E3-98CC-AFC65E715C23
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
      data: ListDocumentsResponseBodyData,
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

