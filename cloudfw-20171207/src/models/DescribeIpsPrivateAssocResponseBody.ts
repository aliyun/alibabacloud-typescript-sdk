// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpsPrivateAssocResponseBodyIpsPrivateAssoc extends $dara.Model {
  /**
   * @remarks
   * The status of private IP tracing.
   * 
   * @example
   * close
   */
  assocInfoStatus?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * aliuid:1096080848305847 assumeOssRole not exist,serviceName:aliyunesarealtimelogpushossrole
   */
  errorMsg?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the resource owner.
   * 
   * @example
   * 1507956024994407
   */
  memberUid?: number;
  /**
   * @remarks
   * A list of protected IP addresses.
   */
  protectedIpList?: string[];
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cba48ec510bb640559c6f5161cde58014
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * job-0000000061279FB000001BBB31F9D673
   */
  resourceName?: string;
  /**
   * @remarks
   * The status of the association.
   * 
   * @example
   * closed
   */
  status?: string;
  /**
   * @remarks
   * A list of unprotected IP addresses.
   */
  unprotectedIpList?: string[];
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-wz92dxepli2pgnut796tf
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * vpc-uf62vdtifj7kffpxrydqd
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      assocInfoStatus: 'AssocInfoStatus',
      errorMsg: 'ErrorMsg',
      memberUid: 'MemberUid',
      protectedIpList: 'ProtectedIpList',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      status: 'Status',
      unprotectedIpList: 'UnprotectedIpList',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assocInfoStatus: 'string',
      errorMsg: 'string',
      memberUid: 'number',
      protectedIpList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      status: 'string',
      unprotectedIpList: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.protectedIpList)) {
      $dara.Model.validateArray(this.protectedIpList);
    }
    if(Array.isArray(this.unprotectedIpList)) {
      $dara.Model.validateArray(this.unprotectedIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpsPrivateAssocResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of details about private IP tracing for the intrusion prevention system (IPS).
   */
  ipsPrivateAssoc?: DescribeIpsPrivateAssocResponseBodyIpsPrivateAssoc[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2841452-CB8D-4F7D-B247-38E1CF7334F8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of assets that have private IP tracing for the IPS enabled.
   * 
   * @example
   * 0
   */
  totalOpenCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipsPrivateAssoc: 'IpsPrivateAssoc',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalOpenCount: 'TotalOpenCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipsPrivateAssoc: { 'type': 'array', 'itemType': DescribeIpsPrivateAssocResponseBodyIpsPrivateAssoc },
      requestId: 'string',
      totalCount: 'number',
      totalOpenCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipsPrivateAssoc)) {
      $dara.Model.validateArray(this.ipsPrivateAssoc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

