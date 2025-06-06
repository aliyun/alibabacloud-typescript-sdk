// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSampleConsistencyJobResponseBody extends $dara.Model {
  config?: string;
  duration?: string;
  easModelServiceName?: string;
  endTime?: string;
  featureSaveResourceId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  itemIdField?: string;
  logs?: string;
  name?: string;
  partitionField?: string;
  partitionFieldFormat?: string;
  requestId?: string;
  requestIdField?: string;
  sampleConsistencyJobId?: string;
  sampleRate?: string;
  sampleTableName?: string;
  sceneId?: string;
  sceneName?: string;
  startTime?: string;
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
      requestId: 'RequestId',
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
      endTime: 'string',
      featureSaveResourceId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      itemIdField: 'string',
      logs: 'string',
      name: 'string',
      partitionField: 'string',
      partitionFieldFormat: 'string',
      requestId: 'string',
      requestIdField: 'string',
      sampleConsistencyJobId: 'string',
      sampleRate: 'string',
      sampleTableName: 'string',
      sceneId: 'string',
      sceneName: 'string',
      startTime: 'string',
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

