// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectResponseBodyDataDataset extends $dara.Model {
  buildResultUrl?: { [key: string]: any };
  coverUrl?: string;
  errorMessage?: string;
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
      errorMessage: 'ErrorMessage',
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
      errorMessage: 'string',
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

export class ListProjectResponseBodyDataSourceClothes extends $dara.Model {
  coverUrl?: string;
  name?: string;
  ossKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      name: 'Name',
      ossKey: 'OssKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
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

export class ListProjectResponseBodyDataSourceFiles extends $dara.Model {
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

export class ListProjectResponseBodyDataSource extends $dara.Model {
  clothes?: ListProjectResponseBodyDataSourceClothes[];
  files?: ListProjectResponseBodyDataSourceFiles[];
  ossKey?: string;
  static names(): { [key: string]: string } {
    return {
      clothes: 'Clothes',
      files: 'Files',
      ossKey: 'OssKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothes: { 'type': 'array', 'itemType': ListProjectResponseBodyDataSourceClothes },
      files: { 'type': 'array', 'itemType': ListProjectResponseBodyDataSourceFiles },
      ossKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clothes)) {
      $dara.Model.validateArray(this.clothes);
    }
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponseBodyDataUser extends $dara.Model {
  aliyunUid?: string;
  createTime?: string;
  modifiedTime?: string;
  nickname?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      nickname: 'Nickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      createTime: 'string',
      modifiedTime: 'string',
      nickname: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponseBodyData extends $dara.Model {
  bizUsage?: string;
  createTime?: string;
  dataset?: ListProjectResponseBodyDataDataset;
  ext?: string;
  extInfo?: { [key: string]: any };
  id?: string;
  intro?: string;
  materialCoverUrl?: string;
  modifiedTime?: string;
  source?: ListProjectResponseBodyDataSource;
  status?: string;
  title?: string;
  type?: string;
  user?: ListProjectResponseBodyDataUser;
  static names(): { [key: string]: string } {
    return {
      bizUsage: 'BizUsage',
      createTime: 'CreateTime',
      dataset: 'Dataset',
      ext: 'Ext',
      extInfo: 'ExtInfo',
      id: 'Id',
      intro: 'Intro',
      materialCoverUrl: 'MaterialCoverUrl',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      status: 'Status',
      title: 'Title',
      type: 'Type',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUsage: 'string',
      createTime: 'string',
      dataset: ListProjectResponseBodyDataDataset,
      ext: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      intro: 'string',
      materialCoverUrl: 'string',
      modifiedTime: 'string',
      source: ListProjectResponseBodyDataSource,
      status: 'string',
      title: 'string',
      type: 'string',
      user: ListProjectResponseBodyDataUser,
    };
  }

  validate() {
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    if(this.extInfo) {
      $dara.Model.validateMap(this.extInfo);
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponseBody extends $dara.Model {
  code?: string;
  current?: number;
  data?: ListProjectResponseBodyData[];
  message?: string;
  pages?: number;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      message: 'Message',
      pages: 'Pages',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListProjectResponseBodyData },
      message: 'string',
      pages: 'number',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
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

