// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityIPGroupRelationResponseBodyDataGlobalSecurityIPGroupRel extends $dara.Model {
  /**
   * @example
   * 192.168.1.28/32
   */
  GIpList?: string;
  /**
   * @example
   * test2
   */
  globalIgName?: string;
  /**
   * @example
   * g-1no2rzybnqcv0xxxxxx
   */
  globalSecurityGroupId?: string;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIPGroupRelationResponseBodyData extends $dara.Model {
  globalSecurityIPGroupRel?: DescribeSecurityIPGroupRelationResponseBodyDataGlobalSecurityIPGroupRel[];
  /**
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityIPGroupRel: 'GlobalSecurityIPGroupRel',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityIPGroupRel: { 'type': 'array', 'itemType': DescribeSecurityIPGroupRelationResponseBodyDataGlobalSecurityIPGroupRel },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.globalSecurityIPGroupRel)) {
      $dara.Model.validateArray(this.globalSecurityIPGroupRel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIPGroupRelationResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * ListResult<InstanceSSL>
   */
  data?: DescribeSecurityIPGroupRelationResponseBodyData;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * A6D1C8EE-013C-541F-83EB-B13C8xxxxxx
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
      data: DescribeSecurityIPGroupRelationResponseBodyData,
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

