// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayAuthorizableSecurityGroupsResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The security group name.
   * 
   * @example
   * 商品中心集群安全组。
   */
  name?: string;
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
   * The type of the security group. Valid values:
   * 
   * *   Normal: general security group
   * *   Enterprise: enterprise security group
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-uf61resqa9am***
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      securityGroupId: 'securityGroupId',
      type: 'type',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      securityGroupId: 'string',
      type: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayAuthorizableSecurityGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The security groups.
   */
  items?: ListGatewayAuthorizableSecurityGroupsResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListGatewayAuthorizableSecurityGroupsResponseBodyDataItems },
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

export class ListGatewayAuthorizableSecurityGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListGatewayAuthorizableSecurityGroupsResponseBodyData;
  /**
   * @remarks
   * The response message returned.
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
   * 585657D2-1C20-5B8A-AF17-D727C6490BE4
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
      data: ListGatewayAuthorizableSecurityGroupsResponseBodyData,
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

