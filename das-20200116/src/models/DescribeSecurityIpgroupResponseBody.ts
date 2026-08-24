// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityIPGroupResponseBodyDataSecurityIpGroupsEngineInfoList extends $dara.Model {
  /**
   * @remarks
   * The database engine type of the target instance.
   * 
   * @example
   * PolarDBMySQL
   */
  engineName?: string;
  /**
   * @remarks
   * The list of database instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The number of instances under the current logon account.
   * 
   * @example
   * 10
   */
  instanceNum?: number;
  static names(): { [key: string]: string } {
    return {
      engineName: 'EngineName',
      instanceIds: 'InstanceIds',
      instanceNum: 'InstanceNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineName: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIPGroupResponseBodyDataSecurityIpGroups extends $dara.Model {
  /**
   * @remarks
   * The list of database instances bound to the cross-engine whitelist template.
   */
  dbInstances?: string[];
  /**
   * @remarks
   * The instance information for each product bound to the template.
   */
  engineInfoList?: DescribeSecurityIPGroupResponseBodyDataSecurityIpGroupsEngineInfoList[];
  /**
   * @remarks
   * The ECS security group ID. This field is invalid and contains redundant data that will be deprecated.
   * 
   * @example
   * null
   */
  GEcsSgIdList?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * > Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 192.168.1.28/32
   */
  GIpList?: string;
  /**
   * @remarks
   * The IP whitelist template name. The name must meet the following requirements:
   * 
   * - Contains only lowercase letters, digits, and underscores (_).
   * 
   * - Starts with a letter and ends with a letter or digit.
   * 
   * - Contains 2 to 120 characters in length.
   * 
   * @example
   * test_123
   */
  globalIgName?: string;
  /**
   * @remarks
   * The IP whitelist template ID.
   * 
   * @example
   * g-1no2rzybnqcv****
   */
  globalSecurityGroupId?: string;
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
   * The IP type.
   * 
   * @example
   * ipv4
   */
  securityIpType?: string;
  /**
   * @remarks
   * The account ID. You can obtain the ID of the **logon account** on the **Security Settings** page in **Account Management** of the Alibaba Cloud console.
   * 
   * @example
   * 160-79abe3f4****
   */
  uid?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 641***
   */
  userId?: string;
  /**
   * @remarks
   * The network type of the whitelist.
   * 
   * @example
   * mix
   */
  whitelistNetType?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstances: 'DbInstances',
      engineInfoList: 'EngineInfoList',
      GEcsSgIdList: 'GEcsSgIdList',
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
      securityIpType: 'SecurityIpType',
      uid: 'Uid',
      userId: 'UserId',
      whitelistNetType: 'WhitelistNetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstances: { 'type': 'array', 'itemType': 'string' },
      engineInfoList: { 'type': 'array', 'itemType': DescribeSecurityIPGroupResponseBodyDataSecurityIpGroupsEngineInfoList },
      GEcsSgIdList: 'string',
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
      securityIpType: 'string',
      uid: 'string',
      userId: 'string',
      whitelistNetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dbInstances)) {
      $dara.Model.validateArray(this.dbInstances);
    }
    if(Array.isArray(this.engineInfoList)) {
      $dara.Model.validateArray(this.engineInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIPGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of all cross-engine whitelist templates for the user in the specified region.
   */
  securityIpGroups?: DescribeSecurityIPGroupResponseBodyDataSecurityIpGroups[];
  static names(): { [key: string]: string } {
    return {
      securityIpGroups: 'SecurityIpGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIpGroups: { 'type': 'array', 'itemType': DescribeSecurityIPGroupResponseBodyDataSecurityIpGroups },
    };
  }

  validate() {
    if(Array.isArray(this.securityIpGroups)) {
      $dara.Model.validateArray(this.securityIpGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIPGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * ListResult<InstanceSSL>
   */
  data?: DescribeSecurityIPGroupResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, an exception message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CAC553F1-C669-53F1-A295-2CF050E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeSecurityIPGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

