// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetConfig } from "./DatasetConfig";


export class ProjectTags extends $dara.Model {
  /**
   * @remarks
   * 标签键。
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * 标签值。
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
   * The timestamp when the project was created, in RFC3339Nano format.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  createTime?: string;
  datasetConfig?: DatasetConfig;
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
   * The maximum number of bindings per dataset. Valid values: 1 to 10. Default value: 10.
   * 
   * @example
   * 10
   */
  datasetMaxBindCount?: number;
  /**
   * @remarks
   * The maximum number of metadata entities per dataset. Default value: 10000000000.
   * 
   * > This field is reserved for future use and is not enforced.
   * 
   * @example
   * 10000000000
   */
  datasetMaxEntityCount?: number;
  /**
   * @remarks
   * The maximum number of files per dataset. Valid values: 1 to 100000000. Default value: 100000000.
   * 
   * @example
   * 100000000
   */
  datasetMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of metadata relationships per dataset. Default value: 100000000000.
   * 
   * > This field is reserved for future use and is not enforced.
   * 
   * @example
   * 100000000000
   */
  datasetMaxRelationCount?: number;
  /**
   * @remarks
   * The maximum total file size per dataset, in bytes. After this limit is exceeded, no more indexes can be added. Default value: 90000000000000000.
   * 
   * @example
   * 90000000000000000
   */
  datasetMaxTotalFileSize?: number;
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * test project
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of tasks that the project can process per second. This specifies the maximum number of operators that can run in parallel at the same time across the project. Default value: 100.
   * 
   * - Synchronous tasks: if the number of concurrent tasks exceeds this limit, task execution time increases until a timeout occurs.
   * 
   * - Asynchronous tasks: if the number of concurrent tasks exceeds this limit, tasks are queued for a period of time, which delays task completion. If the queuing time also exceeds the limit (typically tens of minutes), the task returns a failure.
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
   * The maximum number of datasets in the project. Valid values: 1 to 1000000000. Default value: 1000000000.
   * 
   * @example
   * 1000000000
   */
  projectMaxDatasetCount?: number;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The maximum number of requests that the project can process per second. This specifies the maximum number of API calls allowed per second for all APIs in the project. Default value: 100.
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
   * The list of tags.
   */
  tags?: ProjectTags[];
  /**
   * @remarks
   * The workflow template ID.
   * 
   * @example
   * Official:ImageManagement
   */
  templateId?: string;
  /**
   * @remarks
   * The current total file size in the project, in bytes.
   * 
   * @example
   * 100000
   */
  totalFileSize?: number;
  /**
   * @remarks
   * The timestamp when the project was last modified, in RFC3339Nano format.
   * 
   * > If the project has not been updated since creation, this timestamp is the same as the creation timestamp.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      datasetConfig: 'DatasetConfig',
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
      datasetConfig: DatasetConfig,
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
    if(this.datasetConfig && typeof (this.datasetConfig as any).validate === 'function') {
      (this.datasetConfig as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

