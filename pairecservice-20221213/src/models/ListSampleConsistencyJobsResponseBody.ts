// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSampleConsistencyJobsResponseBodySampleConsistencyJobs extends $dara.Model {
  config?: string;
  duration?: string;
  easModelServiceName?: string;
  endTime?: number;
  featureSaveResourceId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  itemIdField?: string;
  logs?: string;
  name?: string;
  partitionField?: string;
  partitionFieldFormat?: string;
  requestIdField?: string;
  sampleConsistencyJobId?: string;
  sampleRate?: string;
  sampleTableName?: string;
  sceneId?: string;
  sceneName?: string;
  startTime?: number;
  status?: string;
  userIdField?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      duration: 'Duration',
      easModelServiceName: 'EasModelServiceName',
      endTime: 'EndTime',
      featureSaveResourceId: 'FeatureSaveResourceId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      itemIdField: 'ItemIdField',
      logs: 'Logs',
      name: 'Name',
      partitionField: 'PartitionField',
      partitionFieldFormat: 'PartitionFieldFormat',
      requestIdField: 'RequestIdField',
      sampleConsistencyJobId: 'SampleConsistencyJobId',
      sampleRate: 'SampleRate',
      sampleTableName: 'SampleTableName',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      startTime: 'StartTime',
      status: 'Status',
      userIdField: 'UserIdField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      duration: 'string',
      easModelServiceName: 'string',
      endTime: 'number',
      featureSaveResourceId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      itemIdField: 'string',
      logs: 'string',
      name: 'string',
      partitionField: 'string',
      partitionFieldFormat: 'string',
      requestIdField: 'string',
      sampleConsistencyJobId: 'string',
      sampleRate: 'string',
      sampleTableName: 'string',
      sceneId: 'string',
      sceneName: 'string',
      startTime: 'number',
      status: 'string',
      userIdField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSampleConsistencyJobsResponseBody extends $dara.Model {
  requestId?: string;
  sampleConsistencyJobs?: ListSampleConsistencyJobsResponseBodySampleConsistencyJobs[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sampleConsistencyJobs: 'SampleConsistencyJobs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sampleConsistencyJobs: { 'type': 'array', 'itemType': ListSampleConsistencyJobsResponseBodySampleConsistencyJobs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sampleConsistencyJobs)) {
      $dara.Model.validateArray(this.sampleConsistencyJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

