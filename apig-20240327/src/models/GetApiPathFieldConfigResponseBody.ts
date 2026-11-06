// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataPathConfigsFieldPathsValue } from "./DataPathConfigsFieldPathsValue";


export class GetApiPathFieldConfigResponseBodyDataPathConfigs extends $dara.Model {
  /**
   * @remarks
   * The collection of field configurations under the path, grouped by mapping key, where each group represents a set of field configuration items.
   */
  fieldPaths?: { [key: string]: DataPathConfigsFieldPathsValue[] };
  /**
   * @remarks
   * The request path of the API.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      fieldPaths: 'fieldPaths',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldPaths: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataPathConfigsFieldPathsValue } },
      path: 'string',
    };
  }

  validate() {
    if(this.fieldPaths) {
      $dara.Model.validateMap(this.fieldPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiPathFieldConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the HTTP API.
   * 
   * @example
   * api-123456
   */
  apiId?: string;
  /**
   * @remarks
   * The ID of the cloud-native API gateway.
   * 
   * @example
   * gw-123456
   */
  gatewayId?: string;
  /**
   * @remarks
   * The list of field configurations grouped by API request path.
   */
  pathConfigs?: GetApiPathFieldConfigResponseBodyDataPathConfigs[];
  static names(): { [key: string]: string } {
    return {
      apiId: 'apiId',
      gatewayId: 'gatewayId',
      pathConfigs: 'pathConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      gatewayId: 'string',
      pathConfigs: { 'type': 'array', 'itemType': GetApiPathFieldConfigResponseBodyDataPathConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.pathConfigs)) {
      $dara.Model.validateArray(this.pathConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiPathFieldConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetApiPathFieldConfigResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetApiPathFieldConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
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

