// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResponseBodyPodsHistoryPods extends $dara.Model {
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
   * 2021-01-12T14:36:01Z
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
   * The IP address of the node.
   * 
   * @example
   * 10.0.1.3
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the node.
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
   * The status of the node.
   * 
   * @example
   * Failed
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
   * The type of the node.
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

