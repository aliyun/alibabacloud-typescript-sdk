// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProfileResponseBodyDataAttributes extends $dara.Model {
  attributeId?: string;
  defaultValue?: string;
  description?: string;
  immutable?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributeId: 'AttributeId',
      defaultValue: 'DefaultValue',
      description: 'Description',
      immutable: 'Immutable',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeId: 'string',
      defaultValue: 'string',
      description: 'string',
      immutable: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProfileResponseBodyData extends $dara.Model {
  attributes?: QueryProfileResponseBodyDataAttributes[];
  description?: string;
  name?: string;
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      description: 'Description',
      name: 'Name',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': QueryProfileResponseBodyDataAttributes },
      description: 'string',
      name: 'string',
      schemaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProfileResponseBody extends $dara.Model {
  code?: string;
  data?: QueryProfileResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryProfileResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

