// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceAmount } from "./ResourceAmount";


export class QueueMeta extends $dara.Model {
  gmtDequeuedTime?: string;
  gmtEnqueuedTime?: string;
  gmtPositionModifiedTime?: string;
  name?: string;
  position?: string;
  queueStrategy?: string;
  quotaId?: string;
  resource?: ResourceAmount;
  scheduledResource?: string;
  status?: string;
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

