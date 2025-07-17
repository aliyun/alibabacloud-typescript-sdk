// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiParameter } from "./HttpApiParameter";


export class HttpApiRequestContractBody extends $dara.Model {
  /**
   * @example
   * application/json
   */
  contentType?: string;
  description?: string;
  /**
   * @example
   * {"key":"value"}
   */
  example?: string;
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
  body?: HttpApiRequestContractBody;
  headerParameters?: HttpApiParameter[];
  pathParameters?: HttpApiParameter[];
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

