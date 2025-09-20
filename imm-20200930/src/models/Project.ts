// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProjectTags extends $dara.Model {
  tagKey?: string;
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
  createTime?: string;
  datasetCount?: number;
  datasetMaxBindCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  description?: string;
  engineConcurrency?: number;
  fileCount?: number;
  projectMaxDatasetCount?: number;
  projectName?: string;
  projectQueriesPerSecond?: number;
  serviceRole?: string;
  tags?: ProjectTags[];
  templateId?: string;
  totalFileSize?: number;
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

