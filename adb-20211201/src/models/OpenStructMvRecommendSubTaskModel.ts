// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructMvRecommendSubTaskModel extends $dara.Model {
  endTime?: string;
  scanQueriesCount?: number;
  startTime?: string;
  status?: string;
  subQueriesCount?: number;
  subtaskId?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      scanQueriesCount: 'ScanQueriesCount',
      startTime: 'StartTime',
      status: 'Status',
      subQueriesCount: 'SubQueriesCount',
      subtaskId: 'SubtaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      scanQueriesCount: 'number',
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

