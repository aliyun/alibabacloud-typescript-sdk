// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFeatureConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of feature configurations
   */
  featureConf?: { [key: string]: any }[];
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * llm_query_moderation
   */
  serviceCode?: string;
  /**
   * @remarks
   * Type
   * 
   * @example
   * custom_llm_template
   */
  type?: string;
  /**
   * @remarks
   * UID.
   * 
   * @example
   * 1643953****74290
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      featureConf: 'FeatureConf',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConf: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      resourceType: 'string',
      serviceCode: 'string',
      type: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.featureConf)) {
      $dara.Model.validateArray(this.featureConf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetFeatureConfigResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message for this request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * ID assigned by the backend, used to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Success indicator
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetFeatureConfigResponseBodyData,
      httpStatusCode: 'number',
      msg: 'string',
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

