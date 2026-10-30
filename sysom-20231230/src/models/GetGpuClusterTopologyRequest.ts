// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGpuClusterTopologyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel. Used to view the collective communication topology and the topology relationships of a specified channel ID under a specified communication group, such as the communication, tree, or ring topology among ranks within a communication group. This parameter must be used together with communication_id and topo_type. You can call the GetGpuClusterArgsOptions operation with the channel filter parameter to obtain the list of channel_id values under a specified communication_id.
   * 
   * @example
   * communicationId =0x412523235123
   * channelId=1
   * topoType=ring
   */
  channelId?: string;
  /**
   * @remarks
   * The name of the cluster. You can select a cluster from the cluster list obtained by calling the GetListGpuCluster operation.
   * 
   * This parameter is required.
   * 
   * @example
   * "cluster1"
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the communication group. Used to view the collective communication topology and the topology relationships of a specified communication group ID, such as the communication, tree, or ring topology among ranks within a communication group. This parameter must be used together with channel_id and topo_type. You can call the GetGpuClusterArgsOptions operation with the communication filter type to obtain the list of communication_id values.
   * 
   * @example
   * communicationId =0x412523235123
   * channelId=1
   * topoType=ring
   */
  communicationId?: string;
  /**
   * @remarks
   * The list of instances for which to query GPU topology information.
   * 
   * @example
   * ["instance1", "instance2","instance3"]
   */
  instanceIdList?: any;
  /**
   * @remarks
   * The list of pods for which to query GPU topology information.
   * 
   * @example
   * ["pod1", "pod2","pod3"]
   */
  podList?: any;
  /**
   * @remarks
   * The query timestamp. Default value: the current time. The timestamp must be accurate to seconds.
   * 
   * @example
   * 1709740800
   */
  startTime?: string;
  /**
   * @remarks
   * The list of tasks for which to query GPU topology information.
   * 
   * @example
   * ["task1", "task2"]
   */
  taskIdList?: any;
  /**
   * @remarks
   * The topology type. Used to view the collective communication topology and the topology relationships of a specified topology type under a specified communication group and channel ID, such as the communication, tree, or ring topology among ranks within a communication group. This parameter must be used together with communication_id and channel_id. You can call the GetGpuClusterArgsOptions operation with the topoType filter parameter to obtain the list of topo_type values under a specified communication_id and channel_id.
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

