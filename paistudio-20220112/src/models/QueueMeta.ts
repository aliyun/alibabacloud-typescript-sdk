// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceAmount } from "./ResourceAmount";


export class QueueMeta extends $dara.Model {
  /**
   * @remarks
   * The time when the task was dequeued.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtDequeuedTime?: string;
  /**
   * @remarks
   * The time when the task was enqueued.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtEnqueuedTime?: string;
  /**
   * @remarks
   * The time when the position of the task in the queue was changed.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtPositionModifiedTime?: string;
  /**
   * @remarks
   * The name of the task in the queue.
   * 
   * @example
   * dlcxxxx
   */
  name?: string;
  /**
   * @remarks
   * The position of the task in the queue. This parameter takes effect only when the task is queued.
   * 
   * @example
   * 10
   */
  position?: string;
  /**
   * @remarks
   * The dequeue strategy.
   * 
   * @example
   * PaiStrategyIntelligent
   */
  queueStrategy?: string;
  /**
   * @remarks
   * The resource quota queue to which the task belongs.
   * 
   * @example
   * quotad2kd8ljpsno
   */
  quotaId?: string;
  /**
   * @remarks
   * The resources occupied by the task in the queue.
   */
  resource?: ResourceAmount;
  /**
   * @remarks
   * The scheduled resources occupied by the task in the queue.
   */
  scheduledResource?: string;
  /**
   * @remarks
   * The status of the task in the queue, such as enqueued or dequeued.
   * 
   * @example
   * Enqueued
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether the task uses idle resources.
   */
  useOversoldResource?: boolean;
  static names(): { [key: string]: string } {
    return {
      gmtDequeuedTime: 'GmtDequeuedTime',
      gmtEnqueuedTime: 'GmtEnqueuedTime',
      gmtPositionModifiedTime: 'GmtPositionModifiedTime',
      name: 'Name',
      position: 'Position',
      queueStrategy: 'QueueStrategy',
      quotaId: 'QuotaId',
      resource: 'Resource',
      scheduledResource: 'ScheduledResource',
      status: 'Status',
      useOversoldResource: 'UseOversoldResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtDequeuedTime: 'string',
      gmtEnqueuedTime: 'string',
      gmtPositionModifiedTime: 'string',
      name: 'string',
      position: 'string',
      queueStrategy: 'string',
      quotaId: 'string',
      resource: ResourceAmount,
      scheduledResource: 'string',
      status: 'string',
      useOversoldResource: 'boolean',
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

