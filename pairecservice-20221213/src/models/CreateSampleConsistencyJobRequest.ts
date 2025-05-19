// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSampleConsistencyJobRequest extends $dara.Model {
  duration?: string;
  easModelServiceName?: string;
  featureSaveResourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  itemIdField?: string;
  name?: string;
  partitionField?: string;
  partitionFieldFormat?: string;
  requestIdField?: string;
  sampleRate?: string;
  sampleTableName?: string;
  sceneId?: string;
  userIdField?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      easModelServiceName: 'EasModelServiceName',
      featureSaveResourceId: 'FeatureSaveResourceId',
      instanceId: 'InstanceId',
      itemIdField: 'ItemIdField',
      name: 'Name',
      partitionField: 'PartitionField',
      partitionFieldFormat: 'PartitionFieldFormat',
      requestIdField: 'RequestIdField',
      sampleRate: 'SampleRate',
      sampleTableName: 'SampleTableName',
      sceneId: 'SceneId',
      userIdField: 'UserIdField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      easModelServiceName: 'string',
      featureSaveResourceId: 'string',
      instanceId: 'string',
      itemIdField: 'string',
      name: 'string',
      partitionField: 'string',
      partitionFieldFormat: 'string',
      requestIdField: 'string',
      sampleRate: 'string',
      sampleTableName: 'string',
      sceneId: 'string',
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

