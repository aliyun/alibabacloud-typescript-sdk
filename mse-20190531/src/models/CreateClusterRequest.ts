// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateClusterRequestTag } from "./CreateClusterRequestTag";


export class CreateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The language type of the returned information:
   * 
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Billing method, including PREPAY (Subscription) and POSTPAY (Pay-As-You-Go).
   * 
   * This parameter is ignored for the Serverless edition.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * Engine specifications, with the following values:
   * 
   * [Professional Edition] 
   * 
   * - `MSE_SC_2_4_60_c`: 2 cores, 4GB
   * - `MSE_SC_1_2_60_c`: 1 core, 2GB
   * - `MSE_SC_4_8_60_c`: 4 cores, 8GB
   * - `MSE_SC_8_16_60_c`: 8 cores, 16GB
   * - `MSE_SC_16_32_60_c`: 16 cores, 32GB
   * 
   * [Developer Edition] 
   * 
   * - `MSE_SC_1_2_60_c`: 1 core, 2GB
   * - `MSE_SC_2_4_60_c`: 2 cores, 4GB
   * 
   * [Serverless Edition]
   * 
   * Ignore this parameter, or you can fill in `MSE_SC_SERVERLESS`.
   * 
   * This parameter is required.
   * 
   * @example
   * MSE_SC_2_4_60_c
   */
  clusterSpecification?: string;
  /**
   * @remarks
   * Cluster type, including ZooKeeper, Nacos-Ans.
   * 
   * This parameter is required.
   * 
   * @example
   * Nacos-Ans
   */
  clusterType?: string;
  /**
   * @remarks
   * Cluster version, with the following values:
   * 
   * [Professional Edition] 
   * 
   * - `NACOS_2_0_0`: indicates Nacos 2.x.x version.
   * - `ZooKeeper_3_8_0`: indicates ZooKeeper 3.8.x version.
   * 
   * [Developer Edition] 
   * 
   * - `NACOS_2_0_0`: indicates Nacos 2.x version.
   * - `ZooKeeper_3_8_0`: indicates ZooKeeper 3.8.x version.
   * 
   * [Serverless Edition]
   * 
   * - `NACOS_2_0_0`: indicates Nacos 2.x version.
   * - `ZooKeeper_3_8_0`: indicates ZooKeeper 3.8.x version.
   * 
   * This parameter is required.
   * 
   * @example
   * NACOS_2_0_0
   */
  clusterVersion?: string;
  /**
   * @remarks
   * Network access type, `slb` or `single_eni`; some regions\\" Developer Edition only support the `single_eni` type.
   * 
   * @example
   * slb
   */
  connectionType?: string;
  /**
   * @remarks
   * No longer in use
   * 
   * @example
   * alicloud-disk-ssd
   * 
   * @deprecated
   */
  diskType?: string;
  /**
   * @remarks
   * Valid when `ConnectionType` is `single_eni`, indicating whether to enable public network access (Elastic IP).
   * 
   * **if can be null:**
   * false
   */
  eipEnabled?: boolean;
  /**
   * @remarks
   * Number of instance nodes, with a range limit of 1 to 9.
   * 
   * [Professional Edition] 
   * - The number of instances must be 3 or more and must be an odd number.
   * 
   * [Developer Edition] 
   * - The number of instances can only be 1.
   * 
   * [Serverless Edition]
   * 
   * Ignore this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  instanceCount?: number;
  /**
   * @remarks
   * Custom instance name
   * 
   * @example
   * tanshuyingtest001
   */
  instanceName?: string;
  /**
   * @remarks
   * Required unless under special circumstances, with the following values:
   * 
   * - `mse_pro`: indicates Professional Edition.
   * - `mse_dev`: indicates Developer Edition.
   * - `mse_serverless`: indicates Serverless Edition.
   * 
   * @example
   * mse_pro
   */
  mseVersion?: string;
  /**
   * @remarks
   * Network type, with the following values:
   * - `privatenet`: indicates a private network.
   * - `pubnet`: indicates a public network.
   * 
   * This parameter is required.
   * 
   * @example
   * privatenet
   */
  netType?: string;
  /**
   * @remarks
   * No longer in use
   * 
   * @example
   * slb.s1.small
   * 
   * @deprecated
   */
  privateSlbSpecification?: string;
  /**
   * @remarks
   * Valid when `ConnectionType` is `slb`. 0 indicates no public network access SLB creation, and values above 1 indicate a fixed bandwidth for public network access SLB; unit: Mbps.
   * 
   * Value range: 0~5000.
   * 
   * @example
   * 0
   */
  pubNetworkFlow?: string;
  /**
   * @remarks
   * No longer in use
   * 
   * @example
   * slb.s1.small
   * 
   * @deprecated
   */
  pubSlbSpecification?: string;
  /**
   * @remarks
   * The region where the cluster is located, including but not limited to the following regions:
   * - `cn-hangzhou`: Hangzhou
   * - `cn-beijing`: Beijing
   * - `cn-shanghai`: Shanghai
   * - `cn-zhangjiakou`: Zhangjiakou
   * - `cn-shenzhen`: Shenzhen
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Extended request parameters, in JSON format.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  /**
   * @remarks
   * Resource group ID. For more details about the resource group, see [Basic Information of Resource Group](https://help.aliyun.com/document_detail/457230.html).
   * 
   * @example
   * rg-aekzcqmoay3dlyq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Valid when `ConnectionType` is `single_eni`, indicating the security group type of the instance.
   * 
   * @example
   * enterprise
   */
  securityGroupType?: string;
  /**
   * @remarks
   * List of tags to be added. Contains up to 20 items.
   */
  tag?: CreateClusterRequestTag[];
  /**
   * @remarks
   * Switch ID.
   * 
   * @example
   * vsw-bp17opt4v18sto39k****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID.
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

