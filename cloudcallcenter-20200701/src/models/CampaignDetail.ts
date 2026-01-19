// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CampaignDetail extends $dara.Model {
  actualEndTime?: number;
  actualStartTime?: number;
  casesAborted?: number;
  casesConnected?: number;
  casesUncompleted?: number;
  completedRate?: number;
  createTime?: number;
  id?: string;
  maxAttemptCount?: number;
  minAttemptInterval?: number;
  name?: string;
  planedEndTime?: number;
  planedStartTime?: number;
  queueName?: string;
  state?: string;
  totalCases?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      actualEndTime: 'ActualEndTime',
      actualStartTime: 'ActualStartTime',
      casesAborted: 'CasesAborted',
      casesConnected: 'CasesConnected',
      casesUncompleted: 'CasesUncompleted',
      completedRate: 'CompletedRate',
      createTime: 'CreateTime',
      id: 'Id',
      maxAttemptCount: 'MaxAttemptCount',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      planedEndTime: 'PlanedEndTime',
      planedStartTime: 'PlanedStartTime',
      queueName: 'QueueName',
      state: 'State',
      totalCases: 'TotalCases',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualEndTime: 'number',
      actualStartTime: 'number',
      casesAborted: 'number',
      casesConnected: 'number',
      casesUncompleted: 'number',
      completedRate: 'number',
      createTime: 'number',
      id: 'string',
      maxAttemptCount: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      planedEndTime: 'number',
      planedStartTime: 'number',
      queueName: 'string',
      state: 'string',
      totalCases: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

