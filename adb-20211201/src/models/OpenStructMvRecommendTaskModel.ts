// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructMvRecommendTaskModel extends $dara.Model {
  createdTime?: string;
  description?: string;
  lastRunAt?: string;
  minRewriteQueryCount?: number;
  minRewriteQueryPattern?: number;
  scanQueriesRange?: number;
  schedulingSettings?: string;
  slowQueryThreshold?: number;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      lastRunAt: 'LastRunAt',
      minRewriteQueryCount: 'MinRewriteQueryCount',
      minRewriteQueryPattern: 'MinRewriteQueryPattern',
      scanQueriesRange: 'ScanQueriesRange',
      schedulingSettings: 'SchedulingSettings',
      slowQueryThreshold: 'SlowQueryThreshold',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      lastRunAt: 'string',
      minRewriteQueryCount: 'number',
      minRewriteQueryPattern: 'number',
      scanQueriesRange: 'number',
      schedulingSettings: 'string',
      slowQueryThreshold: 'number',
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

