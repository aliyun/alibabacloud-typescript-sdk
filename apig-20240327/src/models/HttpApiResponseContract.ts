// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiResponseContractItems extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response description.
   * 
   * @example
   * This is a description.
   */
  description?: string;
  /**
   * @remarks
   * The sample value.
   * 
   * @example
   * {"result": "ok"}
   */
  example?: string;
  /**
   * @remarks
   * The JSON definition description of the response body.
   * 
   * @example
   * {
   *     "type": "object",
   *     "required": [
   *         "result"
   *     ],
   *     "properties": {
   *         "result": {
   *             "type": "string",
   *             "description": "This is a description."
   *         }
   *     }
   * }
   */
  jsonSchema?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      example: 'example',
      jsonSchema: 'jsonSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      description: 'string',
      example: 'string',
      jsonSchema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiResponseContract extends $dara.Model {
  /**
   * @remarks
   * The content type.
   * 
   * This parameter is required.
   * 
   * @example
   * application/json
   */
  contentType?: string;
  /**
   * @remarks
   * The response definition.
   */
  items?: HttpApiResponseContractItems[];
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      items: { 'type': 'array', 'itemType': HttpApiResponseContractItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

