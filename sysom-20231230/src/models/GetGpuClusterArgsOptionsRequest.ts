// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGpuClusterArgsOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * 1. Query the machine list of a cluster
   * Set the retrieval type to comm_instance_id_list or instance_id_list.
   * comm_instance_id_list: retrieves only the machines that participate in collective communication in the specified cluster.
   * instance_id_list: retrieves all machines in the specified cluster.
   * 
   * 2. Query the AI task list of a cluster
   * Set the retrieval type to comm_task_id_list or task_id_list.
   * comm_task_id_list: retrieves only the tasks that involve collective communication in the specified cluster.
   * task_id_list: retrieves all tasks in the specified cluster.
   * 
   * 3. Query the AI job pod list of a cluster
   * Set the retrieval type to comm_pod_list or pod_list.
   * comm_pod_list: retrieves only the pods that participate in collective communication in the specified cluster.
   * pod_list: retrieves all pods in the specified cluster.
   * 
   * 4. Query the collective communication topology
   * communication: retrieves all communication group IDs.
   * channel: retrieves the channel list under the specified communication group ID.
   * topoType: retrieves the topology type under the specified channel of the specified communication group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * instance_id_list
   */
  filterType?: string;
  /**
   * @remarks
   * The filter conditions. The value is a JSON object. The cluster_id field is required. The following optional filter conditions are supported:
   * - instance_id_list
   * - comm_instance_id_list
   * - pod_list
   * - comm_pod_list
   * - communication
   * - task_id_list
   * - comm_task_id_list
   * - channel
   * - topoType
   * 
   * @example
   * {
   * "cluster_id": "cluster1"
   * }
   */
  filterValues?: any;
  static names(): { [key: string]: string } {
    return {
      filterType: 'filterType',
      filterValues: 'filterValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterType: 'string',
      filterValues: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

