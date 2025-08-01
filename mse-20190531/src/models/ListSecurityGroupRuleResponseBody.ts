// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityGroupRuleResponseBodyData extends $dara.Model {
  authCidrs?: string[];
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 81
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-12a432a1f5da423997d8880bd32c304d
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the security group authorization record.
   * 
   * @example
   * 21
   */
  id?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The port range.
   * 
   * @example
   * 8000/8000
   */
  portRange?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp1cg6qlyjepj0y6cf2c
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      authCidrs: 'AuthCidrs',
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
      authCidrs: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authCidrs)) {
      $dara.Model.validateArray(this.authCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupRuleResponseBody extends $dara.Model {
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
   * The returned result.
   */
  data?: ListSecurityGroupRuleResponseBodyData[];
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
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9EC7BDBF-3C38-5C9C-95DD-61E298CD43E8
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
      data: { 'type': 'array', 'itemType': ListSecurityGroupRuleResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
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

