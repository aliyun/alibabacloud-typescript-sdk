// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * prd
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The billing method. Valid values: PREPAY (subscription) and POSTPAY (pay-as-you-go). This parameter is ignored for Serverless Edition.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The engine specifications. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * MSE_SC_2_4_60_c
   */
  clusterSpecification?: string;
  /**
   * @remarks
   * The cluster type. Valid values: ZooKeeper and Nacos-Ans.
   * 
   * This parameter is required.
   * 
   * @example
   * Nacos-Ans
   */
  clusterType?: string;
  /**
   * @remarks
   * The cluster version. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * NACOS_2_0_0
   */
  clusterVersion?: string;
  /**
   * @remarks
   * The network access type. Valid values: `slb` and `single_eni`. In some regions, Developer Edition supports only `single_eni`.
   * 
   * @example
   * slb
   */
  connectionType?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * alicloud-disk-ssd
   * 
   * @deprecated
   */
  diskType?: string;
  /**
   * @remarks
   * Specifies whether to enable public network access by using an elastic IP address (EIP). This parameter takes effect only when ConnectionType is set to `single_eni`.
   * 
   * **if can be null:**
   * false
   */
  eipEnabled?: boolean;
  /**
   * @remarks
   * The number of nodes in the instance. Valid values: 1 to 9.
   * [Professional Edition] 
   * 
   * -  `NACOS_2_0_0`: Nacos 2.x.x.
   * - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x.
   * [Developer Edition] 
   * 
   * -  `NACOS_2_0_0`: Nacos 2.x.
   * - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x.
   * [Serverless Edition]
   * 
   * -  `NACOS_2_0_0`: Nacos 2.x.
   * - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  instanceCount?: number;
  /**
   * @remarks
   * The custom name of the instance.
   * 
   * @example
   * tanshuyingtest001
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance edition. This parameter is required unless otherwise specified. Valid values:
   * 
   * - `mse_pro`: Professional Edition.
   * - `mse_dev`: Developer Edition.
   * - `mse_serverless`: Serverless Edition.
   * 
   * @example
   * mse_pro
   */
  mseVersion?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * - `privatenet`: virtual private cloud (VPC).
   * - `pubnet`: Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * privatenet
   */
  netType?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * slb.s1.small
   * 
   * @deprecated
   */
  privateSlbSpecification?: string;
  /**
   * @remarks
   * The bandwidth of the Internet-facing Server Load Balancer (SLB) instance. This parameter takes effect only when ConnectionType is set to `slb`. A value of 0 indicates that no Internet-facing SLB instance is created. A value greater than 1 indicates the fixed bandwidth of the Internet-facing SLB instance. Unit: Mbit/s. Valid values: 0 to 5000.
   * 
   * @example
   * 0
   */
  pubNetworkFlow?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * slb.s1.small
   * 
   * @deprecated
   */
  pubSlbSpecification?: string;
  /**
   * @remarks
   * The region where the cluster is deployed. Valid values include but are not limited to:
   * - `cn-hangzhou`: China (Hangzhou)
   * - `cn-beijing`: China (Beijing)
   * - `cn-shanghai`: China (Shanghai)
   * - `cn-zhangjiakou`: China (Zhangjiakou)
   * - `cn-shenzhen`: China (Shenzhen)
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The extended request parameters in JSON format.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  /**
   * @remarks
   * The resource group ID. For more information, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/457230.html).
   * 
   * @example
   * rg-aekzcqmoay3dlyq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the security group to which the instance belongs. This parameter takes effect only when ConnectionType is set to `single_eni`. Valid values:
   * 
   * @example
   * enterprise
   */
  securityGroupType?: string;
  /**
   * @remarks
   * The tags to be added. You can add up to 20 tags.
   */
  tag?: CreateClusterRequestTag[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp17opt4v18sto39k****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1t50e045b5g7i3p****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      chargeType: 'ChargeType',
      clusterSpecification: 'ClusterSpecification',
      clusterType: 'ClusterType',
      clusterVersion: 'ClusterVersion',
      connectionType: 'ConnectionType',
      diskType: 'DiskType',
      eipEnabled: 'EipEnabled',
      instanceCount: 'InstanceCount',
      instanceName: 'InstanceName',
      mseVersion: 'MseVersion',
      netType: 'NetType',
      privateSlbSpecification: 'PrivateSlbSpecification',
      pubNetworkFlow: 'PubNetworkFlow',
      pubSlbSpecification: 'PubSlbSpecification',
      region: 'Region',
      requestPars: 'RequestPars',
      resourceGroupId: 'ResourceGroupId',
      securityGroupType: 'SecurityGroupType',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      chargeType: 'string',
      clusterSpecification: 'string',
      clusterType: 'string',
      clusterVersion: 'string',
      connectionType: 'string',
      diskType: 'string',
      eipEnabled: 'boolean',
      instanceCount: 'number',
      instanceName: 'string',
      mseVersion: 'string',
      netType: 'string',
      privateSlbSpecification: 'string',
      pubNetworkFlow: 'string',
      pubSlbSpecification: 'string',
      region: 'string',
      requestPars: 'string',
      resourceGroupId: 'string',
      securityGroupType: 'string',
      tag: { 'type': 'array', 'itemType': CreateClusterRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

