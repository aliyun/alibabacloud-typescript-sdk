// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel extends $dara.Model {
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * 
   * >  Separate multiple IP addresses with commas (,). You can create up to 1,000 IP addresses or CIDR blocks for all IP whitelists.
   * 
   * @example
   * 27.16.214.10,111.60.117.181
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
   * g-gfurfpsh4ycbrm2avst7
   */
  globalSecurityGroupId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hongkong
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

export class DescribeGlobalSecurityIPGroupRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-2ze6069764423m0l
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The global IP whitelist templates associated with the instance.
   */
  globalSecurityIPGroupRel?: DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel[];
  /**
   * @remarks
   * The unique ID of the request. If the request fails, provide this ID for technical support to troubleshoot the failure.
   * 
   * @example
   * F8CA8312-530A-413A-9129-F2BB32A8D404
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      globalSecurityIPGroupRel: 'GlobalSecurityIPGroupRel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      globalSecurityIPGroupRel: { 'type': 'array', 'itemType': DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel },
      requestId: 'string',
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

