// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AsyncTaskVO } from "./AsyncTaskVo";
import { ProjectDetailsLiteVO } from "./ProjectDetailsLiteVo";


export class DatasetItemVO extends $dara.Model {
  asyncTaskList?: AsyncTaskVO[];
  datasetStatus?: number;
  datasetType?: number;
  digest?: string;
  fileSystem?: string;
  id?: string;
  keyName?: string;
  moreInfo?: string;
  path?: string;
  projectsLinked?: ProjectDetailsLiteVO[];
  recentTaskStatus?: number;
  remark?: string;
  schema?: string;
  tableName?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskList: 'AsyncTaskList',
      datasetStatus: 'DatasetStatus',
      datasetType: 'DatasetType',
      digest: 'Digest',
      fileSystem: 'FileSystem',
      id: 'Id',
      keyName: 'KeyName',
      moreInfo: 'MoreInfo',
      path: 'Path',
      projectsLinked: 'ProjectsLinked',
      recentTaskStatus: 'RecentTaskStatus',
      remark: 'Remark',
      schema: 'Schema',
      tableName: 'TableName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskList: { 'type': 'array', 'itemType': AsyncTaskVO },
      datasetStatus: 'number',
      datasetType: 'number',
      digest: 'string',
      fileSystem: 'string',
      id: 'string',
      keyName: 'string',
      moreInfo: 'string',
      path: 'string',
      projectsLinked: { 'type': 'array', 'itemType': ProjectDetailsLiteVO },
      recentTaskStatus: 'number',
      remark: 'string',
      schema: 'string',
      tableName: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.asyncTaskList)) {
      $dara.Model.validateArray(this.asyncTaskList);
    }
    if(Array.isArray(this.projectsLinked)) {
      $dara.Model.validateArray(this.projectsLinked);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

