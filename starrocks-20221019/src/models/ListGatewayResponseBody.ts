// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether public network access is enabled.
   * 
   * @example
   * true
   */
  enablePublicNet?: boolean;
  /**
   * @remarks
   * The number of gateway nodes.
   * 
   * @example
   * 2
   */
  feNodeNumber?: number;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 13822
   */
  gatewayId?: string;
  /**
   * @remarks
   * The gateway name.
   * 
   * @example
   * Gateway 1
   */
  gatewayName?: string;
  /**
   * @remarks
   * The gateway type. Valid values are \\`Slb\\` and \\`Privatezone\\`.
   * 
   * @example
   * slb
   */
  gatewayType?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * fe-c-b25e21e24388****-ab8sjd-internal.starrocks.aliyuncs.com
   */
  internalDomain?: string;
  /**
   * @remarks
   * The ID of the internal-facing Server Load Balancer (SLB) instance.
   * 
   * @example
   * lb-123abc
   */
  internalSlbId?: string;
  /**
   * @remarks
   * The ID of the PrivateZone.
   * 
   * @example
   * a62des2123243881b9s2sa220k2l38m9
   */
  privatezoneId?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * fe-c-b25e21e24388****-8s272d.starrocks.aliyuncs.com
   */
  publicDomain?: string;
  /**
   * @remarks
   * The ID of the access control list (ACL) for public network access.
   * 
   * @example
   * acl-hsb123ksi2
   */
  publicSlbAclId?: string;
  /**
   * @remarks
   * The ID of the public-facing SLB instance.
   * 
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
  /**
   * @remarks
   * The returned data.
   */
  data?: ListGatewayResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
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
   * The request ID.
   * 
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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

