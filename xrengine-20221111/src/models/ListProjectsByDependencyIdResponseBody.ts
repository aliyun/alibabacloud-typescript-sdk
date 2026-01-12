// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsByDependencyIdResponseBodyDataBuildDetail extends $dara.Model {
  completedTime?: string;
  errorMessage?: string;
  estimatedDuration?: number;
  runningTime?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      errorMessage: 'ErrorMessage',
      estimatedDuration: 'EstimatedDuration',
      runningTime: 'RunningTime',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'string',
      errorMessage: 'string',
      estimatedDuration: 'number',
      runningTime: 'string',
      submitTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsByDependencyIdResponseBodyDataDataset extends $dara.Model {
  buildResultUrl?: { [key: string]: any };
  coverUrl?: string;
  glbModelUrl?: string;
  modelUrl?: string;
  originResultUrl?: string;
  ossKey?: string;
  poseUrl?: string;
  previewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      coverUrl: 'CoverUrl',
      glbModelUrl: 'GlbModelUrl',
      modelUrl: 'ModelUrl',
      originResultUrl: 'OriginResultUrl',
      ossKey: 'OssKey',
      poseUrl: 'PoseUrl',
      previewUrl: 'PreviewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      coverUrl: 'string',
      glbModelUrl: 'string',
      modelUrl: 'string',
      originResultUrl: 'string',
      ossKey: 'string',
      poseUrl: 'string',
      previewUrl: 'string',
    };
  }

  validate() {
    if(this.buildResultUrl) {
      $dara.Model.validateMap(this.buildResultUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsByDependencyIdResponseBodyDataSourceSourceFiles extends $dara.Model {
  coverUrl?: string;
  fileName?: string;
  id?: string;
  size?: number;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      fileName: 'FileName',
      id: 'Id',
      size: 'Size',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      fileName: 'string',
      id: 'string',
      size: 'number',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsByDependencyIdResponseBodyDataSource extends $dara.Model {
  createTime?: string;
  id?: string;
  modifiedTime?: string;
  ossKey?: string;
  projectId?: number;
  sourceFiles?: ListProjectsByDependencyIdResponseBodyDataSourceSourceFiles[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      projectId: 'ProjectId',
      sourceFiles: 'SourceFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      modifiedTime: 'string',
      ossKey: 'string',
      projectId: 'number',
      sourceFiles: { 'type': 'array', 'itemType': ListProjectsByDependencyIdResponseBodyDataSourceSourceFiles },
    };
  }

  validate() {
    if(Array.isArray(this.sourceFiles)) {
      $dara.Model.validateArray(this.sourceFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsByDependencyIdResponseBodyData extends $dara.Model {
  bizUsage?: string;
  buildDetail?: ListProjectsByDependencyIdResponseBodyDataBuildDetail;
  createTime?: string;
  dataset?: ListProjectsByDependencyIdResponseBodyDataDataset;
  ext?: string;
  id?: string;
  intro?: string;
  modifiedTime?: string;
  source?: ListProjectsByDependencyIdResponseBodyDataSource;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      createTime: 'CreateTime',
      dataset: 'Dataset',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      buildDetail: ListProjectsByDependencyIdResponseBodyDataBuildDetail,
      createTime: 'string',
      dataset: ListProjectsByDependencyIdResponseBodyDataDataset,
      ext: 'string',
      id: 'string',
      intro: 'string',
      modifiedTime: 'string',
      source: ListProjectsByDependencyIdResponseBodyDataSource,
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.buildDetail && typeof (this.buildDetail as any).validate === 'function') {
      (this.buildDetail as any).validate();
    }
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsByDependencyIdResponseBody extends $dara.Model {
  code?: string;
  data?: ListProjectsByDependencyIdResponseBodyData[];
  errorName?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListProjectsByDependencyIdResponseBodyData },
      errorName: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

