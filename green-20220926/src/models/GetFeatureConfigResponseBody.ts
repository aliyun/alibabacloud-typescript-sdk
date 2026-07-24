// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFeatureConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of feature configurations.
   */
  featureConf?: { [key: string]: any }[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * llm_query_moderation
   */
  serviceCode?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * custom_llm_template
   */
  type?: string;
  /**
   * @remarks
   * UID。
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
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetFeatureConfigResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message for this request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

