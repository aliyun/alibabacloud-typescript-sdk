// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpDubboTranscoderMothedMapListParamMapsList extends $dara.Model {
  /**
   * @example
   * name
   */
  extractKey?: string;
  /**
   * @example
   * ALL_QUERY_PARAMETER
   */
  extractKeySpec?: string;
  /**
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

export class HttpDubboTranscoderMothedMapList extends $dara.Model {
  dubboMothedName?: string;
  /**
   * @example
   * ALL_GET
   */
  httpMothed?: string;
  /**
   * @example
   * /mytestzbk/sayhello
   */
  mothedpath?: string;
  paramMapsList?: HttpDubboTranscoderMothedMapListParamMapsList[];
  /**
   * @example
   * PASS_NOT
   */
  passThroughAllHeaders?: string;
  passThroughList?: string[];
  static names(): { [key: string]: string } {
    return {
      dubboMothedName: 'dubboMothedName',
      httpMothed: 'httpMothed',
      mothedpath: 'mothedpath',
      paramMapsList: 'paramMapsList',
      passThroughAllHeaders: 'passThroughAllHeaders',
      passThroughList: 'passThroughList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboMothedName: 'string',
      httpMothed: 'string',
      mothedpath: 'string',
      paramMapsList: { 'type': 'array', 'itemType': HttpDubboTranscoderMothedMapListParamMapsList },
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
  dubboServiceGroup?: string;
  dubboServiceName?: string;
  dubboServiceVersion?: string;
  mothedMapList?: HttpDubboTranscoderMothedMapList[];
  static names(): { [key: string]: string } {
    return {
      dubboServiceGroup: 'dubboServiceGroup',
      dubboServiceName: 'dubboServiceName',
      dubboServiceVersion: 'dubboServiceVersion',
      mothedMapList: 'mothedMapList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboServiceGroup: 'string',
      dubboServiceName: 'string',
      dubboServiceVersion: 'string',
      mothedMapList: { 'type': 'array', 'itemType': HttpDubboTranscoderMothedMapList },
    };
  }

  validate() {
    if(Array.isArray(this.mothedMapList)) {
      $dara.Model.validateArray(this.mothedMapList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

