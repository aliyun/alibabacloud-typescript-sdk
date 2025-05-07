// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobResponseBodyPodsHistoryPods } from "./GetJobResponseBodyPodsHistoryPods";


export class GetJobResponseBodyPods extends $dara.Model {
  /**
   * @remarks
   * The time when the node was created (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The end time of the node (UTC).
   * 
   * @example
   * 2021-01-12T15:36:05Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The start time of the node (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * The historical nodes.
   */
  historyPods?: GetJobResponseBodyPodsHistoryPods[];
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 10.0.1.2
   */
  ip?: string;
  /**
   * @remarks
   * The node ID. It can be used in the GetPodLogs and GetPodEvents operations to obtain the detailed logs and events of the node.
   * 
   * @example
   * Worker
   */
  podId?: string;
  /**
   * @remarks
   * The UID of the node.
   * 
   * @example
   * fe846462-af2c-4521-bd6f-96787a57591d
   */
  podUid?: string;
  /**
   * @remarks
   * The resource type of the node.
   * 
   * @example
   * Normal
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * *   Pending
   * *   Running
   * *   Succeeded
   * *   Failed
   * *   Unknown
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The sub-status of the node, such as its preemption status. Valid values:
   * 
   * *   Normal
   * *   Evicted
   * 
   * @example
   * Normal
   */
  subStatus?: string;
  /**
   * @remarks
   * The node type, which corresponds to a specific JobSpec in JobSpecs of the CreateJob operation.
   * 
   * @example
   * Worker
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtStartTime: 'GmtStartTime',
      historyPods: 'HistoryPods',
      ip: 'Ip',
      podId: 'PodId',
      podUid: 'PodUid',
      resourceType: 'ResourceType',
      status: 'Status',
      subStatus: 'SubStatus',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtStartTime: 'string',
      historyPods: { 'type': 'array', 'itemType': GetJobResponseBodyPodsHistoryPods },
      ip: 'string',
      podId: 'string',
      podUid: 'string',
      resourceType: 'string',
      status: 'string',
      subStatus: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyPods)) {
      $dara.Model.validateArray(this.historyPods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

