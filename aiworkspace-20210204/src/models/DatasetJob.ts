// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetJob extends $dara.Model {
  completedFileCount?: number;
  createTime?: string;
  datasetJobId?: string;
  datasetVersion?: string;
  description?: string;
  failedFileCount?: number;
  finishTime?: string;
  jobAction?: string;
  jobMode?: string;
  jobSpec?: string;
  logs?: string[];
  status?: string;
  totalFileCount?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      completedFileCount: 'CompletedFileCount',
      createTime: 'CreateTime',
      datasetJobId: 'DatasetJobId',
      datasetVersion: 'DatasetVersion',
      description: 'Description',
      failedFileCount: 'FailedFileCount',
      finishTime: 'FinishTime',
      jobAction: 'JobAction',
      jobMode: 'JobMode',
      jobSpec: 'JobSpec',
      logs: 'Logs',
      status: 'Status',
      totalFileCount: 'TotalFileCount',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedFileCount: 'number',
      createTime: 'string',
      datasetJobId: 'string',
      datasetVersion: 'string',
      description: 'string',
      failedFileCount: 'number',
      finishTime: 'string',
      jobAction: 'string',
      jobMode: 'string',
      jobSpec: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      totalFileCount: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

