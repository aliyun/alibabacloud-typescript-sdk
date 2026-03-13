// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskInstance extends $dara.Model {
  gmtCreatedTime?: string;
  gmtEndTime?: string;
  status?: string;
  taskId?: string;
  taskInstanceId?: string;
  tenantId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreatedTime: 'GmtCreatedTime',
      gmtEndTime: 'GmtEndTime',
      status: 'Status',
      taskId: 'TaskId',
      taskInstanceId: 'TaskInstanceId',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreatedTime: 'string',
      gmtEndTime: 'string',
      status: 'string',
      taskId: 'string',
      taskInstanceId: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

