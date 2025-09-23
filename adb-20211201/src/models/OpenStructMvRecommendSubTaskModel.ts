// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructMvRecommendSubTaskModel extends $dara.Model {
  endTime?: string;
  minRewriteQueryCount?: number;
  minRewriteQueryPattern?: number;
  scanQueriesCount?: number;
  slowQueryThreshold?: number;
  startTime?: string;
  status?: string;
  subQueriesCount?: number;
  subtaskId?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      minRewriteQueryCount: 'MinRewriteQueryCount',
      minRewriteQueryPattern: 'MinRewriteQueryPattern',
      scanQueriesCount: 'ScanQueriesCount',
      slowQueryThreshold: 'SlowQueryThreshold',
      startTime: 'StartTime',
      status: 'Status',
      subQueriesCount: 'SubQueriesCount',
      subtaskId: 'SubtaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      minRewriteQueryCount: 'number',
      minRewriteQueryPattern: 'number',
      scanQueriesCount: 'number',
      slowQueryThreshold: 'number',
      startTime: 'string',
      status: 'string',
      subQueriesCount: 'number',
      subtaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

