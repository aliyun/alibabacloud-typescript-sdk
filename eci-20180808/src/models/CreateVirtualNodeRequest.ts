// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVirtualNodeRequestTag } from "./CreateVirtualNodeRequestTag";
import { CreateVirtualNodeRequestTaint } from "./CreateVirtualNodeRequestTaint";


export class CreateVirtualNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that the value is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The IP address of the DNS server. If dnsPolicy=ClusterFirst is configured for the Elastic Container Instance pod, Elastic Container Instance uses the configuration to provide DNS services to containers. You can configure multiple IP addresses. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 100.1.XX.XX
   */
  clusterDNS?: string;
  /**
   * @remarks
   * The domain name of the cluster. If this parameter is specified, in addition to the search domain of the host, Kubelet configures all containers to search for the specified domain name.
   * 
   * @example
   * example.com
   */
  clusterDomain?: string;
  /**
   * @remarks
   * The custom resources that are supported by the virtual node. If a custom resource is specified in the request of an Elastic Container Instance pod, the pod is scheduled to run on the virtual node that supports the custom resource. You can use the Resource name = Number of resources format to specify custom resources. Separate multiple resources with commas (,).
   * 
   * @example
   * example1.com=100,example2.com=200
   */
  customResources?: string;
  /**
   * @remarks
   * The ID of the elastic IP address (EIP).
   * 
   * @example
   * eip-uf66jeqopgqa9hdn****
   */
  eipInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable Internet access for the VNode. Default value: false.
   * 
   * If the value of this parameter is true, the VNode exposes a public IP address to external services.
   * 
   * @example
   * false
   */
  enablePublicNetwork?: boolean;
  /**
   * @remarks
   * The KubeConfig of the Kubernetes cluster with which the VNode is connected. The value must be Base64-encoded.
   * 
   * @example
   * JTVDbmFwaVZlcnNpb24lM0ElMjB2MSU1Q25jbHVzdGVycyUzQSU1Q24tJTIwY2x1c3RlciUzQSU1Q24uLi******
   */
  kubeConfig?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the virtual node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-uf66jeqopgqa9hdn****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the security group. The VNode and the elastic container instances in the VNode are added to the security group.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-2ze81zoc3yl7a3we****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The tags to add to the VNode. You can add up to 20 tags.
   */
  tag?: CreateVirtualNodeRequestTag[];
  /**
   * @remarks
   * The taints of the VNode. You can configure up to 20 taints.
   */
  taint?: CreateVirtualNodeRequestTaint[];
  /**
   * @remarks
   * Specifies whether to enable TLS bootstrapping. If you set this parameter to true, use the KubeConfig certificate for TLS bootstrapping. Valid values:
   * 
   * - true
   * - false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  tlsBootstrapEnabled?: boolean;
  /**
   * @remarks
   * The ID of the vSwitch. The vSwitch is connected to the VNode and the elastic container instances in the VNode.
   * 
   * You can specify 1 to 10 vSwitches for a VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-2ze23nqzig8inprou****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the VNode. The name must be 2 to 128 characters in length, and can contain lowercase letters, digits, periods (.), and hyphens (-).
   * 
   * @example
   * testNode
   */
  virtualNodeName?: string;
  /**
   * @remarks
   * The zone ID of the VNode.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterDNS: 'ClusterDNS',
      clusterDomain: 'ClusterDomain',
      customResources: 'CustomResources',
      eipInstanceId: 'EipInstanceId',
      enablePublicNetwork: 'EnablePublicNetwork',
      kubeConfig: 'KubeConfig',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      taint: 'Taint',
      tlsBootstrapEnabled: 'TlsBootstrapEnabled',
      vSwitchId: 'VSwitchId',
      virtualNodeName: 'VirtualNodeName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterDNS: 'string',
      clusterDomain: 'string',
      customResources: 'string',
      eipInstanceId: 'string',
      enablePublicNetwork: 'boolean',
      kubeConfig: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateVirtualNodeRequestTag },
      taint: { 'type': 'array', 'itemType': CreateVirtualNodeRequestTaint },
      tlsBootstrapEnabled: 'boolean',
      vSwitchId: 'string',
      virtualNodeName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.taint)) {
      $dara.Model.validateArray(this.taint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

