// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGpuClusterTopologyRequest extends $dara.Model {
  /**
   * @remarks
   * Used when viewing collective communication topology. Specifies the topology relationship for a given channel ID within a communication group, such as the inter-rank communication topology (tree or ring topology). Must be used together with communication_id and topo_type.
   * 
   * ⚠️ Use the channel filter parameter of the GetGpuClusterArgsOptions operation to retrieve the list of channel_id values for a specified communication_id.
   * 
   * @example
   * communicationId =0x412523235123
   * channelId=1
   * topoType=ring
   */
  channelId?: string;
  /**
   * @remarks
   * The cluster name. Select a cluster from the cluster list returned by the GetListGpuCluster operation.
   * 
   * This parameter is required.
   * 
   * @example
   * "cluster1"
   */
  clusterId?: string;
  /**
   * @remarks
   * Used when viewing collective communication topology. Specifies the topology relationship for a given communication group ID, such as the inter-rank communication topology (tree or ring topology) within a communication group. Must be used together with channel_id and topo_type.
   * 
   * ⚠️ Use the communication filter type of the GetGpuClusterArgsOptions operation to retrieve the list of communication_id values.
   * 
   * @example
   * communicationId =0x412523235123
   * channelId=1
   * topoType=ring
   */
  communicationId?: string;
  /**
   * @remarks
   * The GPU topology information for the specified list of instances.
   * 
   * @example
   * ["instance1", "instance2","instance3"]
   */
  instanceIdList?: any;
  /**
   * @remarks
   * The GPU topology information for the specified list of pods.
   * 
   * @example
   * ["pod1", "pod2","pod3"]
   */
  podList?: any;
  /**
   * @remarks
   * The timestamp for the query. Defaults to the current time. Must be a second-level timestamp.
   * 
   * @example
   * 1709740800
   */
  startTime?: string;
  /**
   * @remarks
   * The GPU topology information for the specified list of nodes.
   * 
   * @example
   * ["task1", "task2"]
   */
  taskIdList?: any;
  /**
   * @remarks
   * Used when viewing collective communication topology. Specifies the topology relationship for a given topology type within a communication group and channel, such as the inter-rank communication topology (tree or ring topology). Must be used together with communication_id and channel_id.
   * 
   * ⚠️ Use the topoType filter parameter of the GetGpuClusterArgsOptions operation to retrieve the list of topo_type values for a specified communication_id and channel_id.
   * 
   * @example
   * communicationId =0x412523235123
   * channelId=1
   * topoType=ring
   */
  topoType?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'channelId',
      clusterId: 'clusterId',
      communicationId: 'communicationId',
      instanceIdList: 'instanceIdList',
      podList: 'podList',
      startTime: 'startTime',
      taskIdList: 'taskIdList',
      topoType: 'topoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      clusterId: 'string',
      communicationId: 'string',
      instanceIdList: 'any',
      podList: 'any',
      startTime: 'string',
      taskIdList: 'any',
      topoType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

