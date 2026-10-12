// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayAuthorizedSecurityGroupRulesResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The list of authorized CIDR block addresses.
   */
  authCidrs?: string[];
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * Security group authorized by the staging gateway of the product center
   */
  description?: string;
  /**
   * @remarks
   * The protocol:
   * - TCP
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The port range.
   * 
   * @example
   * 8080/8089
   */
  portRange?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-bp1ftp5sm9os***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The security group name.
   * 
   * @example
   * Product center cluster security group
   */
  securityGroupName?: string;
  /**
   * @remarks
   * The security rule ID of the cloud-native API gateway.
   * 
   * @example
   * gsgr-cqadis5lhtgmv***
   */
  securityGroupRuleId?: string;
  /**
   * @remarks
   * The source security group ID.
   * 
   * @example
   * sg-bp19akuepfe***
   */
  sourceSecurityGroupId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1g63b5q2q29***
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authCidrs: 'authCidrs',
      description: 'description',
      ipProtocol: 'ipProtocol',
      portRange: 'portRange',
      securityGroupId: 'securityGroupId',
      securityGroupName: 'securityGroupName',
      securityGroupRuleId: 'securityGroupRuleId',
      sourceSecurityGroupId: 'sourceSecurityGroupId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCidrs: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
      securityGroupRuleId: 'string',
      sourceSecurityGroupId: 'string',
      vpcId: 'string',
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

export class ListGatewayAuthorizedSecurityGroupRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of security group rules.
   */
  items?: ListGatewayAuthorizedSecurityGroupRulesResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListGatewayAuthorizedSecurityGroupRulesResponseBodyDataItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayAuthorizedSecurityGroupRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListGatewayAuthorizedSecurityGroupRulesResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListGatewayAuthorizedSecurityGroupRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
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

