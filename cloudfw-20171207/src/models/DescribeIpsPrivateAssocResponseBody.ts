// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpsPrivateAssocResponseBodyIpsPrivateAssoc extends $dara.Model {
  /**
   * @remarks
   * The private IP tracing status.
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
   * The Alibaba Cloud account ID to which the resource belongs.
   * 
   * @example
   * 1507956024994407
   */
  memberUid?: number;
  /**
   * @remarks
   * The list of protected IP addresses.
   */
  protectedIpList?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cba48ec510bb640559c6f5161cde58014
   */
  resourceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * job-0000000061279FB000001BBB31F9D673
   */
  resourceName?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * closed
   */
  status?: string;
  /**
   * @remarks
   * The list of unprotected IP addresses.
   */
  unprotectedIpList?: string[];
  /**
   * @remarks
   * The VPC instance ID.
   * 
   * @example
   * vpc-wz92dxepli2pgnut796tf
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC instance name.
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
   * The IPS private IP tracing list.
   */
  ipsPrivateAssoc?: DescribeIpsPrivateAssocResponseBodyIpsPrivateAssoc[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B2841452-CB8D-4F7D-B247-38E1CF7334F8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of instances for which IPS private IP tracing is enabled.
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

