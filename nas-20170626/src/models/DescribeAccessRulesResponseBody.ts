// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessRulesResponseBodyAccessRulesAccessRule extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * @example
   * test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 1
   */
  accessRuleId?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard: General-purpose File Storage NAS (NAS) file system
   * *   extreme: Extreme NAS file system
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The IPv6 address or CIDR block of the authorized object.
   * 
   * @example
   * 2001:250:6000::***
   */
  ipv6SourceCidrIp?: string;
  /**
   * @remarks
   * The priority of the rule.
   * 
   * If multiple rules are attached to the authorized object, the rule with the highest priority takes effect.
   * 
   * Valid values: 1 to 100. The value 1 indicates the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The access permissions of the authorized object on the file system.
   * 
   * Valid values:
   * 
   * *   RDWR (default): the read and write permissions
   * *   RDONLY: the read-only permissions
   * 
   * @example
   * RDWR
   */
  RWAccess?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IP address or CIDR block of the authorized object.
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The access permissions for different types of users in the authorized object.
   * 
   * Valid values:
   * 
   * *   no_squash: allows access from root users to the file system.
   * *   root_squash: grants root users the least permissions as the nobody user.
   * *   all_squash: grants all users the least permissions as the nobody user.
   * 
   * The nobody user has the least permissions in Linux and can access only the public content of the file system. This ensures the security of the file system.
   * 
   * @example
   * no_squash
   */
  userAccess?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      accessRuleId: 'AccessRuleId',
      fileSystemType: 'FileSystemType',
      ipv6SourceCidrIp: 'Ipv6SourceCidrIp',
      priority: 'Priority',
      RWAccess: 'RWAccess',
      regionId: 'RegionId',
      sourceCidrIp: 'SourceCidrIp',
      userAccess: 'UserAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      accessRuleId: 'string',
      fileSystemType: 'string',
      ipv6SourceCidrIp: 'string',
      priority: 'number',
      RWAccess: 'string',
      regionId: 'string',
      sourceCidrIp: 'string',
      userAccess: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessRulesResponseBodyAccessRules extends $dara.Model {
  accessRule?: DescribeAccessRulesResponseBodyAccessRulesAccessRule[];
  static names(): { [key: string]: string } {
    return {
      accessRule: 'AccessRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRule: { 'type': 'array', 'itemType': DescribeAccessRulesResponseBodyAccessRulesAccessRule },
    };
  }

  validate() {
    if(Array.isArray(this.accessRule)) {
      $dara.Model.validateArray(this.accessRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The rules in the permission group.
   */
  accessRules?: DescribeAccessRulesResponseBodyAccessRules;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 86D89E82-4297-4343-8E1E-A2495B35****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessRules: 'AccessRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRules: DescribeAccessRulesResponseBodyAccessRules,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accessRules && typeof (this.accessRules as any).validate === 'function') {
      (this.accessRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

