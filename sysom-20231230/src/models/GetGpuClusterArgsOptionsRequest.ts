// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGpuClusterArgsOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * 1. Query cluster machine list scenario: Set the retrieval type to comm_instance_id_list or instance_id_list. comm_instance_id_list: Retrieves only the list of machines in the specified cluster that participate in collective communication. instance_id_list: Retrieves the list of all machines in the specified cluster.
   * 2. Query cluster AI task list scenario: Set the retrieval type to comm_task_id_list or task_id_list. comm_task_id_list: Retrieves only the list of tasks in the specified cluster that involve collective communication. task_id_list: Retrieves the list of all tasks in the specified cluster.
   * 3. Query cluster AI job pod list scenario: Set the retrieval type to comm_pod_list or pod_list. comm_pod_list: Retrieves only the list of pods in the specified cluster that participate in collective communication. pod_list: Retrieves the list of all pods in the specified cluster.
   * 4. Query collective communication topology scenario: communication: Retrieves all communication group IDs. channel: Retrieves the channel list under the specified communication group ID. topoType: Retrieves the topology type under the specified channel of the specified communication group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * instance_id_list
   */
  filterType?: string;
  /**
   * @remarks
   * The filter conditions, which is a JSON object. The cluster_id field is required. Other filter conditions support the following values:
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

