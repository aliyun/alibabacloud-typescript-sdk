// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAclPolicyResponseBodyInternetAclPolicyListAclPolicyList extends $dara.Model {
  /**
   * @remarks
   * The comment on the IP CIDR block in the VPC that can access the private gateway over the Internet.
   * 
   * @example
   * default
   */
  comment?: string;
  /**
   * @remarks
   * The IP CIDR block in the VPC that can access the private gateway over the Internet.
   * 
   * @example
   * 10.23.XX.XX/32
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyResponseBodyInternetAclPolicyList extends $dara.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway over the Internet.
   */
  aclPolicyList?: ListAclPolicyResponseBodyInternetAclPolicyListAclPolicyList[];
  static names(): { [key: string]: string } {
    return {
      aclPolicyList: 'AclPolicyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyInternetAclPolicyListAclPolicyList },
    };
  }

  validate() {
    if(Array.isArray(this.aclPolicyList)) {
      $dara.Model.validateArray(this.aclPolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyResponseBodyIntranetVpcAclPolicyListAclPolicyList extends $dara.Model {
  /**
   * @remarks
   * The comment on the IP CIDR block in the VPC that can access the private gateway over the internal network.
   * 
   * @example
   * Test Entry
   */
  comment?: string;
  /**
   * @remarks
   * The IP CIDR block in the VPC that can access the private gateway over the internal network.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyResponseBodyIntranetVpcAclPolicyList extends $dara.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway over the internal network.
   */
  aclPolicyList?: ListAclPolicyResponseBodyIntranetVpcAclPolicyListAclPolicyList[];
  /**
   * @remarks
   * The VPC ID. For more information about how to obtain the VPC ID, see DescribeVpcs.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclPolicyList: 'AclPolicyList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyIntranetVpcAclPolicyListAclPolicyList },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclPolicyList)) {
      $dara.Model.validateArray(this.aclPolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The access control policies of the private gateway over the Internet.
   */
  internetAclPolicyList?: ListAclPolicyResponseBodyInternetAclPolicyList[];
  /**
   * @remarks
   * The access control policies of the private gateway over the internal network.
   */
  intranetVpcAclPolicyList?: ListAclPolicyResponseBodyIntranetVpcAclPolicyList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      internetAclPolicyList: 'InternetAclPolicyList',
      intranetVpcAclPolicyList: 'IntranetVpcAclPolicyList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      internetAclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyInternetAclPolicyList },
      intranetVpcAclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyIntranetVpcAclPolicyList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.internetAclPolicyList)) {
      $dara.Model.validateArray(this.internetAclPolicyList);
    }
    if(Array.isArray(this.intranetVpcAclPolicyList)) {
      $dara.Model.validateArray(this.intranetVpcAclPolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

