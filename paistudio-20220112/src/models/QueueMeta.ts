// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceAmount } from "./ResourceAmount";


export class QueueMeta extends $dara.Model {
  /**
   * @remarks
   * The time the entry was removed from the queue.
   */
  gmtDequeuedTime?: string;
  /**
   * @remarks
   * The time the entry was added to the queue.
   */
  gmtEnqueuedTime?: string;
  /**
   * @remarks
   * The last time the position of the entry was modified.
   */
  gmtPositionModifiedTime?: string;
  /**
   * @remarks
   * The name of the queue entry.
   */
  name?: string;
  /**
   * @remarks
   * The position of the entry in the queue.
   */
  position?: string;
  /**
   * @remarks
   * The queuing strategy for the entry.
   */
  queueStrategy?: string;
  /**
   * @remarks
   * The ID of the associated quota.
   */
  quotaId?: string;
  /**
   * @remarks
   * The resources that the queue entry requires.
   */
  resource?: ResourceAmount;
  /**
   * @remarks
   * The resources scheduled for the entry.
   */
  scheduledResource?: string;
  /**
   * @remarks
   * The current status of the entry.
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the entry can use oversold resources.
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

