// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProjectDetailResponseBodyDataBuildDetail extends $dara.Model {
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

export class QueryProjectDetailResponseBodyDataDatasetPolicy extends $dara.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectDetailResponseBodyDataDataset extends $dara.Model {
  buildResultUrl?: { [key: string]: any };
  coverUrl?: string;
  createTime?: string;
  deleted?: boolean;
  errorCode?: string;
  errorMessage?: string;
  glbModelUrl?: string;
  id?: string;
  modelUrl?: string;
  modifiedTime?: string;
  originResultUrl?: string;
  ossKey?: string;
  policy?: QueryProjectDetailResponseBodyDataDatasetPolicy;
  poseUrl?: string;
  previewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildResultUrl: 'BuildResultUrl',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      glbModelUrl: 'GlbModelUrl',
      id: 'Id',
      modelUrl: 'ModelUrl',
      modifiedTime: 'ModifiedTime',
      originResultUrl: 'OriginResultUrl',
      ossKey: 'OssKey',
      policy: 'Policy',
      poseUrl: 'PoseUrl',
      previewUrl: 'PreviewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildResultUrl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      coverUrl: 'string',
      createTime: 'string',
      deleted: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      glbModelUrl: 'string',
      id: 'string',
      modelUrl: 'string',
      modifiedTime: 'string',
      originResultUrl: 'string',
      ossKey: 'string',
      policy: QueryProjectDetailResponseBodyDataDatasetPolicy,
      poseUrl: 'string',
      previewUrl: 'string',
    };
  }

  validate() {
    if(this.buildResultUrl) {
      $dara.Model.validateMap(this.buildResultUrl);
    }
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectDetailResponseBodyDataSourceClothes extends $dara.Model {
  coverUrl?: string;
  id?: string;
  name?: string;
  ossKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      id: 'Id',
      name: 'Name',
      ossKey: 'OssKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      id: 'string',
      name: 'string',
      ossKey: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectDetailResponseBodyDataSourceFiles extends $dara.Model {
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

export class QueryProjectDetailResponseBodyDataSourcePolicy extends $dara.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectDetailResponseBodyDataSource extends $dara.Model {
  clothes?: QueryProjectDetailResponseBodyDataSourceClothes[];
  createTime?: string;
  deleted?: boolean;
  files?: QueryProjectDetailResponseBodyDataSourceFiles[];
  id?: string;
  modifiedTime?: string;
  ossKey?: string;
  policy?: QueryProjectDetailResponseBodyDataSourcePolicy;
  static names(): { [key: string]: string } {
    return {
      clothes: 'Clothes',
      createTime: 'CreateTime',
      deleted: 'Deleted',
      files: 'Files',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothes: { 'type': 'array', 'itemType': QueryProjectDetailResponseBodyDataSourceClothes },
      createTime: 'string',
      deleted: 'boolean',
      files: { 'type': 'array', 'itemType': QueryProjectDetailResponseBodyDataSourceFiles },
      id: 'string',
      modifiedTime: 'string',
      ossKey: 'string',
      policy: QueryProjectDetailResponseBodyDataSourcePolicy,
    };
  }

  validate() {
    if(Array.isArray(this.clothes)) {
      $dara.Model.validateArray(this.clothes);
    }
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectDetailResponseBodyData extends $dara.Model {
  bizUsage?: string;
  buildDetail?: QueryProjectDetailResponseBodyDataBuildDetail;
  createMode?: string;
  createTime?: string;
  dataset?: QueryProjectDetailResponseBodyDataDataset;
  deleted?: boolean;
  dependencies?: string;
  ext?: string;
  id?: string;
  intro?: string;
  materialCoverUrl?: string;
  modifiedTime?: string;
  source?: QueryProjectDetailResponseBodyDataSource;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      buildDetail: 'BuildDetail',
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      dataset: 'Dataset',
      deleted: 'Deleted',
      dependencies: 'Dependencies',
      ext: 'Ext',
      id: 'Id',
      intro: 'Intro',
      materialCoverUrl: 'MaterialCoverUrl',
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
      buildDetail: QueryProjectDetailResponseBodyDataBuildDetail,
      createMode: 'string',
      createTime: 'string',
      dataset: QueryProjectDetailResponseBodyDataDataset,
      deleted: 'boolean',
      dependencies: 'string',
      ext: 'string',
      id: 'string',
      intro: 'string',
      materialCoverUrl: 'string',
      modifiedTime: 'string',
      source: QueryProjectDetailResponseBodyDataSource,
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

export class QueryProjectDetailResponseBody extends $dara.Model {
  code?: string;
  data?: QueryProjectDetailResponseBodyData;
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryProjectDetailResponseBodyData,
      errorName: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

