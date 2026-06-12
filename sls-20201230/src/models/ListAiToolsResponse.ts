// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAiToolsResponseBodyFields extends $dara.Model {
  /**
   * @remarks
   * The name of the field.
   */
  name?: string;
  /**
   * @remarks
   * The valid values for the field.
   */
  option?: string[];
  /**
   * @remarks
   * Indicates whether the field is required.
   */
  required?: boolean;
  /**
   * @remarks
   * The type of the field.
   */
  type?: string;
  /**
   * @remarks
   * An example of the field.
   */
  example?: string;
  /**
   * @remarks
   * The description of the field.
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      option: 'option',
      required: 'required',
      type: 'type',
      example: 'example',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      option: { 'type': 'array', 'itemType': 'string' },
      required: 'boolean',
      type: 'string',
      example: 'string',
      description: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.option)) {
      $dara.Model.validateArray(this.option);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiToolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fields of the tool.
   */
  fields?: ListAiToolsResponseBodyFields[];
  /**
   * @remarks
   * The name of the tool.
   */
  name?: string;
  /**
   * @remarks
   * The description of the tool.
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      name: 'name',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': ListAiToolsResponseBodyFields },
      name: 'string',
      description: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiToolsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAiToolsResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': ListAiToolsResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

