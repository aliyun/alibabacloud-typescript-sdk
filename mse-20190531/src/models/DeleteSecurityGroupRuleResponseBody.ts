// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityGroupRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * auto-description1
   */
  description?: string;
  /**
   * @remarks
   * The gateway ID.
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
   * The time when the rule was created.
   * 
   * @example
   * 2022-01-07 18:07:57
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the rule was last modified.
   * 
   * @example
   * 2022-01-11T14:12:55.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The transport-layer protocol. The value is not case-sensitive. Valid values:
   * 
   * - icmp
   * 
   * - gre
   * 
   * - tcp
   * 
   * - udp
   * 
   * - all: The rule applies to all protocols.
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The transport-layer port range. Valid values:
   * 
   * - For TCP or UDP, the port range is 1 to 65535. Use a forward slash (/) to separate the start port from the end port. For example: `1/200`.
   * 
   * - For ICMP, the value is `-1/-1`.
   * 
   * - For GRE, the value is `-1/-1`.
   * 
   * - For all protocols, the value is `-1/-1`.
   * 
   * @example
   * 8443/8443
   */
  portRange?: string;
  /**
   * @remarks
   * The security group ID.
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
  data?: DeleteSecurityGroupRuleResponseBodyData;
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
   * The response message.
   * 
   * @example
   * The request is processed successfully.
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
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
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

