// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCampaignsRequest extends $dara.Model {
  actualStartTimeFrom?: string;
  actualStartTimeTo?: string;
  instanceId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  planedStartTimeFrom?: string;
  planedStartTimeTo?: string;
  queueId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      actualStartTimeFrom: 'ActualStartTimeFrom',
      actualStartTimeTo: 'ActualStartTimeTo',
      instanceId: 'InstanceId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planedStartTimeFrom: 'PlanedStartTimeFrom',
      planedStartTimeTo: 'PlanedStartTimeTo',
      queueId: 'QueueId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualStartTimeFrom: 'string',
      actualStartTimeTo: 'string',
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      planedStartTimeFrom: 'string',
      planedStartTimeTo: 'string',
      queueId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

