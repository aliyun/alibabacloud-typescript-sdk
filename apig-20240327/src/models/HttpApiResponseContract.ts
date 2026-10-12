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
   * The description.
   * 
   * @example
   * Normal API response
   */
  description?: string;
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * {"result": "ok"}
   */
  example?: string;
  /**
   * @remarks
   * The JSON schema definition of the response body.
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
   *             "description": "Operation result. \\"ok\\" indicates success."
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
   * The response content type.
   * 
   * This parameter is required.
   * 
   * @example
   * application/json
   */
  contentType?: string;
  /**
   * @remarks
   * The response definitions.
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

