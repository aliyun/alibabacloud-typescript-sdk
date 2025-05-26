// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructMvRecommendTaskModel extends $dara.Model {
  createdTime?: string;
  description?: string;
  lastRunAt?: string;
  scanQueriesRange?: number;
  schedulingSettings?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      lastRunAt: 'LastRunAt',
      scanQueriesRange: 'ScanQueriesRange',
      schedulingSettings: 'SchedulingSettings',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      lastRunAt: 'string',
      scanQueriesRange: 'number',
      schedulingSettings: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

