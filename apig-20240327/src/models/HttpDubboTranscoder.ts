// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpDubboTranscoderMethodMapListParamMapsList extends $dara.Model {
  /**
   * @remarks
   * The key used to extract the input parameter.
   * 
   * @example
   * name
   */
  extractKey?: string;
  /**
   * @remarks
   * The input parameter location. Valid values: ALL_QUERY_PARAMETER: request parameter. ALL_HEADER: request header. ALL_PATH: URI of the request. ALL_BODY: request body.
   * 
   * @example
   * ALL_QUERY_PARAMETER
   */
  extractKeySpec?: string;
  /**
   * @remarks
   * The backend parameter type.
   * 
   * @example
   * java.lang.String
   */
  mappingType?: string;
  static names(): { [key: string]: string } {
    return {
      extractKey: 'extractKey',
      extractKeySpec: 'extractKeySpec',
      mappingType: 'mappingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractKey: 'string',
      extractKeySpec: 'string',
      mappingType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpDubboTranscoderMethodMapList extends $dara.Model {
  /**
   * @remarks
   * The Dubbo method name.
   */
  dubboMethodName?: string;
  /**
   * @remarks
   * The HTTP method. Valid values: ALL_GET. ALL_POST. ALL_PUT. ALL_DELETE. ALL_PATCH.
   * 
   * @example
   * ALL_GET
   */
  httpMethod?: string;
  /**
   * @remarks
   * The method matching path.
   * 
   * @example
   * /mytestzbk/sayhello
   */
  methodPath?: string;
  /**
   * @remarks
   * The parameter mapping list.
   */
  paramMapsList?: HttpDubboTranscoderMethodMapListParamMapsList[];
  /**
   * @remarks
   * The header pass-through type. Valid values: PASS_ALL: passes through all headers. PASS_NOT: does not pass through any headers. PASS_ASSIGN: passes through specified headers.
   * 
   * @example
   * PASS_NOT
   */
  passThroughAllHeaders?: string;
  /**
   * @remarks
   * The list of specified pass-through headers.
   */
  passThroughList?: string[];
  static names(): { [key: string]: string } {
    return {
      dubboMethodName: 'dubboMethodName',
      httpMethod: 'httpMethod',
      methodPath: 'methodPath',
      paramMapsList: 'paramMapsList',
      passThroughAllHeaders: 'passThroughAllHeaders',
      passThroughList: 'passThroughList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboMethodName: 'string',
      httpMethod: 'string',
      methodPath: 'string',
      paramMapsList: { 'type': 'array', 'itemType': HttpDubboTranscoderMethodMapListParamMapsList },
      passThroughAllHeaders: 'string',
      passThroughList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.paramMapsList)) {
      $dara.Model.validateArray(this.paramMapsList);
    }
    if(Array.isArray(this.passThroughList)) {
      $dara.Model.validateArray(this.passThroughList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpDubboTranscoder extends $dara.Model {
  /**
   * @remarks
   * The Dubbo service group.
   */
  dubboServiceGroup?: string;
  /**
   * @remarks
   * The Dubbo service name.
   */
  dubboServiceName?: string;
  /**
   * @remarks
   * The Dubbo service version.
   */
  dubboServiceVersion?: string;
  /**
   * @remarks
   * The method mapping list.
   */
  methodMapList?: HttpDubboTranscoderMethodMapList[];
  static names(): { [key: string]: string } {
    return {
      dubboServiceGroup: 'dubboServiceGroup',
      dubboServiceName: 'dubboServiceName',
      dubboServiceVersion: 'dubboServiceVersion',
      methodMapList: 'methodMapList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboServiceGroup: 'string',
      dubboServiceName: 'string',
      dubboServiceVersion: 'string',
      methodMapList: { 'type': 'array', 'itemType': HttpDubboTranscoderMethodMapList },
    };
  }

  validate() {
    if(Array.isArray(this.methodMapList)) {
      $dara.Model.validateArray(this.methodMapList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

