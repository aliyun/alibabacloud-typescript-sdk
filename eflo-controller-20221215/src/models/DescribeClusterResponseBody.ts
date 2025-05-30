// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterResponseBodyComponents } from "./DescribeClusterResponseBodyComponents";
import { DescribeClusterResponseBodyNetworks } from "./DescribeClusterResponseBodyNetworks";


export class DescribeClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * 集群描述
   * 
   * @example
   * 测试集群
   */
  clusterDescription?: string;
  /**
   * @remarks
   * 集群id
   * 
   * @example
   * i116913051662373010974
   */
  clusterId?: string;
  /**
   * @remarks
   * 集群名称
   * 
   * @example
   * Eflo-YJ-Test-Cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * 集群类型
   * 
   * @example
   * AckEdgePro
   */
  clusterType?: string;
  /**
   * @remarks
   * 组件信息
   */
  components?: DescribeClusterResponseBodyComponents[];
  /**
   * @remarks
   * 计算网络的IP类型
   * 
   * @example
   * IPv4
   */
  computingIpVersion?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2022-06-08T07:05:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * 集群编号
   * 
   * @example
   * A2
   */
  hpnZone?: string;
  /**
   * @remarks
   * 网络信息
   */
  networks?: DescribeClusterResponseBodyNetworks;
  /**
   * @remarks
   * 节点数
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @remarks
   * 节点组数量
   * 
   * @example
   * 2
   */
  nodeGroupCount?: number;
  /**
   * @remarks
   * 网络接口巨帧
   * 
   * @example
   * unsupported
   */
  openEniJumboFrame?: string;
  /**
   * @remarks
   * 集群状态
   * 
   * @example
   * running
   */
  operatingState?: string;
  /**
   * @remarks
   * 请求id。
   * 
   * @example
   * 887FA855-89F4-5DB3-B305-C5879EC480E6
   */
  requestId?: string;
  /**
   * @remarks
   * 资源组id
   * 
   * @example
   * rg-aek2k3rqlvv6ytq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * 任务id
   * 
   * @example
   * i152609221670466904596
   */
  taskId?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 2022-08-23T06:36:17.000Z
   */
  updateTime?: string;
  /**
   * @remarks
   * 专有网络ID
   * 
   * @example
   * vpc-0jlkqysom5dmcviymep3f
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterDescription: 'ClusterDescription',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      components: 'Components',
      computingIpVersion: 'ComputingIpVersion',
      createTime: 'CreateTime',
      hpnZone: 'HpnZone',
      networks: 'Networks',
      nodeCount: 'NodeCount',
      nodeGroupCount: 'NodeGroupCount',
      openEniJumboFrame: 'OpenEniJumboFrame',
      operatingState: 'OperatingState',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      taskId: 'TaskId',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDescription: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      components: { 'type': 'array', 'itemType': DescribeClusterResponseBodyComponents },
      computingIpVersion: 'string',
      createTime: 'string',
      hpnZone: 'string',
      networks: DescribeClusterResponseBodyNetworks,
      nodeCount: 'number',
      nodeGroupCount: 'number',
      openEniJumboFrame: 'string',
      operatingState: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      taskId: 'string',
      updateTime: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(this.networks && typeof (this.networks as any).validate === 'function') {
      (this.networks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

