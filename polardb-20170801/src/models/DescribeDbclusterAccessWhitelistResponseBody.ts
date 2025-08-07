// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS security group.
   * 
   * @example
   * sg-bp**************
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the ECS security group.
   * 
   * @example
   * vpc-********************
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups extends $dara.Model {
  DBClusterSecurityGroup?: DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      DBClusterSecurityGroup: 'DBClusterSecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterSecurityGroup: { 'type': 'array', 'itemType': DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup },
    };
  }

  validate() {
    if(Array.isArray(this.DBClusterSecurityGroup)) {
      $dara.Model.validateArray(this.DBClusterSecurityGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray extends $dara.Model {
  /**
   * @remarks
   * The attributes of the IP whitelist group. Set this parameter to **hidden** to hide the IP whitelist group in the console.
   * 
   * > *   The IP whitelist group that has appeared in the console cannot be hidden.
   * > *   This parameter can be specified only when the **WhiteListType** parameter is set to **IP**.
   * 
   * @example
   * hidden
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP whitelist group. The group name must be 2 to 120 characters in length and consists of lowercase letters and digits. It must start with a letter, and end with a letter or a digit.
   * 
   * *   If the specified whitelist group name does not exist, the whitelist group is created.
   * *   If the specified whitelist group name exists, the whitelist group is modified.
   * *   If you do not specify this parameter, the default group is modified.
   * 
   * > *   You can create a maximum of 50 IP whitelist groups for a cluster.
   * >*   This parameter can be specified only when the **WhiteListType** parameter is set to **IP**.
   * 
   * @example
   * default
   */
  DBClusterIPArrayName?: string;
  /**
   * @remarks
   * The IP addresses or Classless Inter-Domain Routing (CIDR) blocks in the IP whitelist group. You can add 1,000 IP addresses or CIDR blocks to all the IP whitelist groups. Separate multiple IP addresses with commas (,). The following two formats are supported:
   * 
   * *   IP addresses. Example: 10.23.12.24.
   * *   CIDR blocks. Example: 10.23.12.24/24. 24 indicates the length of the prefix of the CIDR block. The length is the range of 1 to 32.
   * 
   * >  This parameter can be specified only when the **WhiteListType** parameter is set to **IP**.
   * 
   * @example
   * 11.***.***.***,11.***.***.***
   */
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
      DBClusterIPArrayName: 'DBClusterIPArrayName',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIPArrayAttribute: 'string',
      DBClusterIPArrayName: 'string',
      securityIps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhitelistResponseBodyItems extends $dara.Model {
  DBClusterIPArray?: DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray[];
  static names(): { [key: string]: string } {
    return {
      DBClusterIPArray: 'DBClusterIPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIPArray: { 'type': 'array', 'itemType': DescribeDBClusterAccessWhitelistResponseBodyItemsDBClusterIPArray },
    };
  }

  validate() {
    if(Array.isArray(this.DBClusterIPArray)) {
      $dara.Model.validateArray(this.DBClusterIPArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAccessWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Elastic Compute Service (ECS) security groups that are associated with the cluster.
   */
  DBClusterSecurityGroups?: DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups;
  /**
   * @remarks
   * The details about the cluster.
   */
  items?: DescribeDBClusterAccessWhitelistResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 559E91A2-CDA3-4E9F-808B-29D738******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterSecurityGroups: 'DBClusterSecurityGroups',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterSecurityGroups: DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups,
      items: DescribeDBClusterAccessWhitelistResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBClusterSecurityGroups && typeof (this.DBClusterSecurityGroups as any).validate === 'function') {
      (this.DBClusterSecurityGroups as any).validate();
    }
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

