// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupStatusResponseBodyDataPodStatusConditions extends $dara.Model {
  /**
   * @remarks
   * The message about the event.
   * 
   * @example
   * Completed
   */
  message?: string;
  /**
   * @remarks
   * The reason for the transition into the current status of the event.
   * 
   * @example
   * Completed
   */
  reason?: string;
  /**
   * @remarks
   * The time when the status last changed.
   * 
   * @example
   * 2021-05-12T07:02:47Z
   */
  lastTransitionTime?: string;
  /**
   * @remarks
   * The status of the condition.
   * 
   * @example
   * True
   */
  status?: string;
  /**
   * @remarks
   * The type of the condition. Valid values:
   * 
   * *   PodReadyToStartContainers
   * *   Initialized
   * *   Ready
   * *   ContainersReady
   * *   PodScheduled
   * *   ContainerHasSufficientDisk
   * *   ContainerInstanceCreated
   * *   Unschedulable
   * 
   * @example
   * Ready
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      reason: 'Reason',
      lastTransitionTime: 'lastTransitionTime',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      reason: 'string',
      lastTransitionTime: 'string',
      status: 'string',
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

