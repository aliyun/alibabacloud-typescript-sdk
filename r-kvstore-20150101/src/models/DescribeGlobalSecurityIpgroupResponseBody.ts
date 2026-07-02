// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup extends $dara.Model {
  /**
   * @remarks
   * An array of instance IDs that are associated with the global IP whitelist template.
   */
  DBInstances?: string[];
  /**
   * @remarks
   * The IP addresses in the global IP whitelist template.
   * 
   * > Separate multiple IP addresses with a comma.
   * 
   * @example
   * 192.168.0.1,10.10.10.10
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the global IP whitelist template.
   * 
   * @example
   * test_123
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the global IP whitelist template.
   * 
   * @example
   * g-zsldxfiwjmti0kcm****
   */
  globalSecurityGroupId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: { 'type': 'array', 'itemType': 'string' },
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBInstances)) {
      $dara.Model.validateArray(this.DBInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalSecurityIPGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of global IP whitelist templates.
   */
  globalSecurityIPGroup?: DescribeGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2FF6158E-3394-4A90-B634-79C49184****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityIPGroup: 'GlobalSecurityIPGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityIPGroup: { 'type': 'array', 'itemType': DescribeGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.globalSecurityIPGroup)) {
      $dara.Model.validateArray(this.globalSecurityIPGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

