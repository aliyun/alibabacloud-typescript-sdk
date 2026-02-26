// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup extends $dara.Model {
  securityGroupId?: string;
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
  DBClusterIPArrayAttribute?: string;
  DBClusterIPArrayName?: string;
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
  DBClusterSecurityGroups?: DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups;
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

