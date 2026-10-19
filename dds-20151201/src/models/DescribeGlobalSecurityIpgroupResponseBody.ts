// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup extends $dara.Model {
  /**
   * @remarks
   * The list of instances bound to the global IP whitelist template.
   */
  DBInstances?: string[];
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * 
   * > Separate multiple IP addresses with commas (,). A maximum of 1,000 IP addresses or CIDR blocks can be added to all IP whitelists in total.
   * 
   * @example
   * 117.12.202.19
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the IP whitelist template.
   * 
   * @example
   * dev_baoxian_k8s_bj
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP whitelist template.
   * 
   * @example
   * g-sdgwqyp4f5j1x3qk7yvm
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
   * The list of global IP whitelist templates.
   */
  globalSecurityIPGroup?: DescribeGlobalSecurityIPGroupResponseBodyGlobalSecurityIPGroup[];
  /**
   * @remarks
   * The unique ID of the request. If you encounter any issues, provide this request ID to the support team for troubleshooting.
   * 
   * @example
   * 72651AF9-7897-41A7-8B67-6C15C7F26A0A
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

