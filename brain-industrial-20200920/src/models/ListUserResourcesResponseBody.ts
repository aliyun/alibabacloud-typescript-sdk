// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserResourcesResponseBodyData extends $dara.Model {
  chargeType?: string;
  /**
   * @example
   * brainindustrial_simupostpaid_public_cn
   */
  commodityCode?: string;
  /**
   * @example
   * 2024-12-21
   */
  endDate?: string;
  /**
   * @example
   * 12345ea3cff446e8837078c2baffbe83
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 20240902
   */
  startDate?: string;
  /**
   * @example
   * ""
   */
  status?: string;
  statusMsg?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      endDate: 'endDate',
      instanceId: 'instanceId',
      region: 'region',
      startDate: 'startDate',
      status: 'status',
      statusMsg: 'statusMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      endDate: 'string',
      instanceId: 'string',
      region: 'string',
      startDate: 'string',
      status: 'string',
      statusMsg: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResourcesResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListUserResourcesResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 65308A66-8764-53EE-8D4A-201E86CA88C5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListUserResourcesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

