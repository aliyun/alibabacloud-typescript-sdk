// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessRulesResponseBodyAccessRulesAccessRule extends $dara.Model {
  accessGroupName?: string;
  accessRuleId?: string;
  fileSystemType?: string;
  ipv6SourceCidrIp?: string;
  priority?: number;
  RWAccess?: string;
  regionId?: string;
  sourceCidrIp?: string;
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

