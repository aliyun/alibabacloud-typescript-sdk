// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityGroupRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * auto-description1
   */
  description?: string;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 103
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597c****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-07 18:07:57
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-01-11T14:12:55.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The transport layer protocol. The value of this parameter is case-insensitive. Valid values:
   * 
   * *   icmp
   * *   gre
   * *   tcp
   * *   udp
   * *   all: All protocols are supported.
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The range of ports for the transport layer protocol in the destination security group. Valid values:
   * 
   * *   When the IpProtocol parameter is set to tcp or udp, the port number range is 1 to 65535. The start port number and the end port number are separated by a forward slash (/). Example: 1/200.
   * *   If the IpProtocol parameter is set to icmp, the port number range is -1/-1, which indicates all ports.
   * *   If the IpProtocol parameter is set to gre, the port number range is -1/-1, which indicates all ports.
   * *   If the IpProtocol parameter is set to all, the port number range is -1/-1, which indicates all ports.
   * 
   * @example
   * 8443/8443
   */
  portRange?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-uf6hgwe067prhg68agfa
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      ipProtocol: 'string',
      portRange: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: DeleteSecurityGroupRuleResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 43E50CB7-258E-5AFF-9B93-ECC19928C699
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DeleteSecurityGroupRuleResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

