// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNamespaceListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The command that was run to install the agent.
   * 
   * @example
   * http://edas-bj.oss-cn-beijing-internal.aliyuncs.com/test/install.sh
   */
  agentInstall?: string;
  /**
   * @remarks
   * This parameter is no longer valid.
   * 
   * @example
   * false
   */
  current?: boolean;
  /**
   * @remarks
   * Indicates whether custom namespaces are returned. Valid values:
   * 
   * *   **true**: Custom namespaces are returned.
   * *   **false**: Custom namespaces are not returned.
   * 
   * @example
   * true
   */
  custom?: boolean;
  /**
   * @remarks
   * Indicates whether hybrid cloud namespaces are excluded. Valid values:
   * 
   * *   **true**: Hybrid cloud namespaces are excluded.
   * *   **false**: Hybrid cloud namespaces are included.
   * 
   * @example
   * false
   */
  hybridCloudEnable?: boolean;
  /**
   * @remarks
   * The short ID of the namespace.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @remarks
   * The region to which the namespace belongs.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-wz969ngg2e49q5i4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-2ze559r1z1bpwqxwp****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-2ze0i263cnn311nvj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      agentInstall: 'AgentInstall',
      current: 'Current',
      custom: 'Custom',
      hybridCloudEnable: 'HybridCloudEnable',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInstall: 'string',
      current: 'boolean',
      custom: 'boolean',
      hybridCloudEnable: 'boolean',
      nameSpaceShortId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

