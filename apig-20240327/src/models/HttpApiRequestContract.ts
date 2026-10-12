// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiParameter } from "./HttpApiParameter";


export class HttpApiRequestContractBody extends $dara.Model {
  /**
   * @remarks
   * The content type of the request body.
   * 
   * @example
   * application/json
   */
  contentType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Body parameter description
   */
  description?: string;
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * {"result":"ok"}
   */
  example?: string;
  /**
   * @remarks
   * The JSON schema definition of the request body.
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
      contentType: 'contentType',
      description: 'description',
      example: 'example',
      jsonSchema: 'jsonSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
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

export class HttpApiRequestContract extends $dara.Model {
  /**
   * @remarks
   * The request body parameter definitions.
   */
  body?: HttpApiRequestContractBody;
  /**
   * @remarks
   * The request header parameter definitions.
   */
  headerParameters?: HttpApiParameter[];
  /**
   * @remarks
   * The path parameter definitions.
   */
  pathParameters?: HttpApiParameter[];
  /**
   * @remarks
   * The query parameter definitions.
   */
  queryParameters?: HttpApiParameter[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      headerParameters: 'headerParameters',
      pathParameters: 'pathParameters',
      queryParameters: 'queryParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: HttpApiRequestContractBody,
      headerParameters: { 'type': 'array', 'itemType': HttpApiParameter },
      pathParameters: { 'type': 'array', 'itemType': HttpApiParameter },
      queryParameters: { 'type': 'array', 'itemType': HttpApiParameter },
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(Array.isArray(this.headerParameters)) {
      $dara.Model.validateArray(this.headerParameters);
    }
    if(Array.isArray(this.pathParameters)) {
      $dara.Model.validateArray(this.pathParameters);
    }
    if(Array.isArray(this.queryParameters)) {
      $dara.Model.validateArray(this.queryParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

