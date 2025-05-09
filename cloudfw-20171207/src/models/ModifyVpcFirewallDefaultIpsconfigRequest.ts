// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcFirewallDefaultIPSConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable basic protection. Valid values:
   * 
   * *   **1**: yes.
   * *   **0**: no.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  basicRules?: string;
  /**
   * @remarks
   * Specifies whether to enable virtual patching. Valid values:
   * 
   * *   **1**: yes.
   * *   **0**: no.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  enableAllPatch?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The level of the rule group for the IPS. Valid values:
   * 
   * *   **1**: loose
   * *   **2**: medium
   * *   **3**: strict
   * 
   * @example
   * 1
   */
  ruleClass?: string;
  /**
   * @remarks
   * The mode of the intrusion prevention system (IPS). Valid values:
   * 
   * *   **1**: block mode.
   * *   **0**: monitor mode.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  runMode?: string;
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
   * The instance ID of the VPC firewall.
   * 
   * *   If the VPC firewall protects traffic between a VPC and a network instance that is attached to a Cloud Enterprise Network (CEN) instance, the value of this parameter is the ID of the CEN instance. The network instance can be a VPC, a virtual border router (VBR), or a Cloud Connect Network (CCN) instance. You can call the [DescribeVpcFirewallCenList](https://help.aliyun.com/document_detail/345777.html) operation to query the IDs of CEN instances.
   * *   If the VPC firewall protects traffic between two VPCs that are connected by using an Express Connect circuit, the value of this parameter is the instance ID of the VPC firewall. You can call the [DescribeVpcFirewallList](https://help.aliyun.com/document_detail/342932.html) operation to query the instance IDs of VPC firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      enableAllPatch: 'EnableAllPatch',
      lang: 'Lang',
      memberUid: 'MemberUid',
      ruleClass: 'RuleClass',
      runMode: 'RunMode',
      sourceIp: 'SourceIp',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'string',
      enableAllPatch: 'string',
      lang: 'string',
      memberUid: 'string',
      ruleClass: 'string',
      runMode: 'string',
      sourceIp: 'string',
      vpcFirewallId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

