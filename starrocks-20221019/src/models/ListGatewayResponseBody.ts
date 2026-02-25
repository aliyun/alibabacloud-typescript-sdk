// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  enablePublicNet?: boolean;
  /**
   * @example
   * 2
   */
  feNodeNumber?: number;
  /**
   * @example
   * 13822
   */
  gatewayId?: string;
  gatewayName?: string;
  /**
   * @example
   * slb
   */
  gatewayType?: string;
  /**
   * @example
   * fe-c-b25e21e24388****-ab8sjd-internal.starrocks.aliyuncs.com
   */
  internalDomain?: string;
  /**
   * @example
   * lb-123abc
   */
  internalSlbId?: string;
  /**
   * @remarks
   * PrivatezoneId
   * 
   * @example
   * a62des2123243881b9s2sa220k2l38m9
   */
  privatezoneId?: string;
  /**
   * @example
   * fe-c-b25e21e24388****-8s272d.starrocks.aliyuncs.com
   */
  publicDomain?: string;
  /**
   * @example
   * acl-hsb123ksi2
   */
  publicSlbAclId?: string;
  /**
   * @example
   * lb-abc123
   */
  publicSlbId?: string;
  static names(): { [key: string]: string } {
    return {
      enablePublicNet: 'EnablePublicNet',
      feNodeNumber: 'FeNodeNumber',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      gatewayType: 'GatewayType',
      internalDomain: 'InternalDomain',
      internalSlbId: 'InternalSlbId',
      privatezoneId: 'PrivatezoneId',
      publicDomain: 'PublicDomain',
      publicSlbAclId: 'PublicSlbAclId',
      publicSlbId: 'PublicSlbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePublicNet: 'boolean',
      feNodeNumber: 'number',
      gatewayId: 'string',
      gatewayName: 'string',
      gatewayType: 'string',
      internalDomain: 'string',
      internalSlbId: 'string',
      privatezoneId: 'string',
      publicDomain: 'string',
      publicSlbAclId: 'string',
      publicSlbId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBody extends $dara.Model {
  data?: ListGatewayResponseBodyData[];
  /**
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListGatewayResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

