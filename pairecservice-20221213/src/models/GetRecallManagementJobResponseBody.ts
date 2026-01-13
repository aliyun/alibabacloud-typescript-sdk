// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecallManagementJobResponseBodyRecallManagerTableInfo extends $dara.Model {
  dataVersion?: string;
  recallManagerTableVersionId?: string;
  sourceTableDataSize?: string;
  sourceTableRowCount?: string;
  static names(): { [key: string]: string } {
    return {
      dataVersion: 'DataVersion',
      recallManagerTableVersionId: 'RecallManagerTableVersionId',
      sourceTableDataSize: 'SourceTableDataSize',
      sourceTableRowCount: 'SourceTableRowCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataVersion: 'string',
      recallManagerTableVersionId: 'string',
      sourceTableDataSize: 'string',
      sourceTableRowCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecallManagementJobResponseBody extends $dara.Model {
  endTime?: string;
  log?: string;
  recallManagementJobId?: string;
  recallManagerTableInfo?: GetRecallManagementJobResponseBodyRecallManagerTableInfo;
  requestId?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      log: 'Log',
      recallManagementJobId: 'RecallManagementJobId',
      recallManagerTableInfo: 'RecallManagerTableInfo',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      log: 'string',
      recallManagementJobId: 'string',
      recallManagerTableInfo: GetRecallManagementJobResponseBodyRecallManagerTableInfo,
      requestId: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.recallManagerTableInfo && typeof (this.recallManagerTableInfo as any).validate === 'function') {
      (this.recallManagerTableInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

