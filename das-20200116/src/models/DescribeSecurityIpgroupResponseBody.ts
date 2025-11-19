// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityIPGroupResponseBodyDataSecurityIpGroupsEngineInfoList extends $dara.Model {
  /**
   * @example
   * PolarDBMySQL
   */
  engineName?: string;
  instanceIds?: string[];
  /**
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
  dbInstances?: string[];
  engineInfoList?: DescribeSecurityIPGroupResponseBodyDataSecurityIpGroupsEngineInfoList[];
  GEcsSgIdList?: string;
  /**
   * @example
   * 192.168.1.28/32
   */
  GIpList?: string;
  /**
   * @example
   * test_123
   */
  globalIgName?: string;
  /**
   * @example
   * g-1no2rzybnqcv****
   */
  globalSecurityGroupId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * ipv4
   */
  securityIpType?: string;
  /**
   * @example
   * 160-79abe3f4****
   */
  uid?: string;
  /**
   * @example
   * 641***
   */
  userId?: string;
  /**
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
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * CAC553F1-C669-53F1-A295-2CF050E****
   */
  requestId?: string;
  /**
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

