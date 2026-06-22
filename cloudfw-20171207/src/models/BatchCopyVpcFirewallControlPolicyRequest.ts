// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCopyVpcFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the access control policy group for the source virtual private cloud (VPC) firewall of this operation. Valid values:
   * 
   * - If the VPC firewall protects traffic between a network instance in a Cloud Enterprise Network (CEN) instance (network instances include VPCs, VBRs, and CCNs) and a specified VPC, the policy group ID is the CEN instance ID.
   * 
   * - If the VPC firewall protects traffic between two VPCs that are connected through Express Connect, the policy group ID is the VPC firewall instance ID.
   * 
   * > You can invoke the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  sourceVpcFirewallId?: string;
  /**
   * @remarks
   * The ID of the access control policy group for the destination virtual private cloud (VPC) firewall of this operation. Valid values:
   * 
   * - If the VPC firewall protects traffic between a network instance in a Cloud Enterprise Network (CEN) instance (network instances include VPCs, VBRs, and CCNs) and a specified VPC, the policy group ID is the CEN instance ID.
   * 
   * - If the VPC firewall protects traffic between two VPCs that are connected through Express Connect, the policy group ID is the VPC firewall instance ID.
   * 
   * > You can invoke the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-e37d3a04cf79446a****
   */
  targetVpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      sourceVpcFirewallId: 'SourceVpcFirewallId',
      targetVpcFirewallId: 'TargetVpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      sourceVpcFirewallId: 'string',
      targetVpcFirewallId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

