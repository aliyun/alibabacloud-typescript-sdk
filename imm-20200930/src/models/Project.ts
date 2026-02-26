// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProjectTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Project extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the project was created. The timestamp is in the RFC3339Nano format.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The current number of datasets in the project.
   * 
   * @example
   * 5
   */
  datasetCount?: number;
  /**
   * @remarks
   * The maximum number of bindings that a dataset can have. Valid values: 1 to 10. Default value: 10.
   * 
   * @example
   * 10
   */
  datasetMaxBindCount?: number;
  /**
   * @remarks
   * The maximum number of metadata entities in a dataset. Default value: 10000000000.
   * 
   * >  This parameter is reserved and does not actually apply a limit.
   * 
   * @example
   * 10000000000
   */
  datasetMaxEntityCount?: number;
  /**
   * @remarks
   * The maximum number of files in a dataset. Valid values: 1 to 100000000. Default value: 100000000.
   * 
   * @example
   * 100000000
   */
  datasetMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of metadata relationships in a dataset. Default value: 100000000000.
   * 
   * >  This parameter is reserved and does not actually apply a limit.
   * 
   * @example
   * 100000000000
   */
  datasetMaxRelationCount?: number;
  /**
   * @remarks
   * The maximum total file size for a dataset. If the total file size exceeds this limit, indexes can no longer be added. Default value: 90000000000000000. Unit: bytes.
   * 
   * @example
   * 90000000000000000
   */
  datasetMaxTotalFileSize?: number;
  /**
   * @remarks
   * The project description.
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of tasks that the project can process per second. This corresponds to the maximum number of operators that can run in parallel in the project. Default value: 100.
   * 
   * *   If the number of synchronous tasks that run in parallel exceeds this limit, the task execution time will be extended until a timeout occurs.
   * *   If the number of asynchronous tasks that run in parallel exceeds this limit, the tasks will be queued. This causes delayed task completion. If a task remains in the queue for longer than the specified time limit (usually dozens of seconds), the task will fail.
   * 
   * @example
   * 100
   */
  engineConcurrency?: number;
  /**
   * @remarks
   * The current number of files in the project.
   * 
   * @example
   * 10
   */
  fileCount?: number;
  /**
   * @remarks
   * The maximum number of datasets that a project can contain. Valid values: 1 to 1000000000. Default value: 1000000000.
   * 
   * @example
   * 1000000000
   */
  projectMaxDatasetCount?: number;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The maximum number of requests that can be processed by the project per second. This corresponds to the maximum number of API operations that can be called in the project per second. Default value: 100.
   * 
   * @example
   * 100
   */
  projectQueriesPerSecond?: number;
  /**
   * @remarks
   * The service role.
   * 
   * @example
   * AliyunIMMDefaultRole
   */
  serviceRole?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ProjectTags[];
  /**
   * @remarks
   * The ID of the workflow template.
   * 
   * @example
   * DefaultId
   */
  templateId?: string;
  /**
   * @remarks
   * The current total size of files in the project. Unit: bytes.
   * 
   * @example
   * 100000
   */
  totalFileSize?: number;
  /**
   * @remarks
   * The timestamp when the project was last modified. The timestamp is in the RFC3339Nano format.
   * 
   * >  If a project is not modified after it is created, the timestamp when the project was created is the same as the timestamp when the project was last modified.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      datasetCount: 'DatasetCount',
      datasetMaxBindCount: 'DatasetMaxBindCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      description: 'Description',
      engineConcurrency: 'EngineConcurrency',
      fileCount: 'FileCount',
      projectMaxDatasetCount: 'ProjectMaxDatasetCount',
      projectName: 'ProjectName',
      projectQueriesPerSecond: 'ProjectQueriesPerSecond',
      serviceRole: 'ServiceRole',
      tags: 'Tags',
      templateId: 'TemplateId',
      totalFileSize: 'TotalFileSize',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      datasetCount: 'number',
      datasetMaxBindCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      description: 'string',
      engineConcurrency: 'number',
      fileCount: 'number',
      projectMaxDatasetCount: 'number',
      projectName: 'string',
      projectQueriesPerSecond: 'number',
      serviceRole: 'string',
      tags: { 'type': 'array', 'itemType': ProjectTags },
      templateId: 'string',
      totalFileSize: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

