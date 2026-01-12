// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectDatasetResponseBodyDataDataset extends $dara.Model {
  coverUrl?: string;
  createTime?: string;
  id?: string;
  modelUrl?: string;
  modifiedTime?: string;
  originResultUrl?: string;
  ossKey?: string;
  poseUrl?: string;
  previewUrl?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      id: 'Id',
      modelUrl: 'ModelUrl',
      modifiedTime: 'ModifiedTime',
      originResultUrl: 'OriginResultUrl',
      ossKey: 'OssKey',
      poseUrl: 'PoseUrl',
      previewUrl: 'PreviewUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'string',
      id: 'string',
      modelUrl: 'string',
      modifiedTime: 'string',
      originResultUrl: 'string',
      ossKey: 'string',
      poseUrl: 'string',
      previewUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectDatasetResponseBodyData extends $dara.Model {
  createMode?: string;
  createTime?: string;
  dataset?: GetProjectDatasetResponseBodyDataDataset;
  id?: string;
  intro?: string;
  modifiedTime?: string;
  status?: string;
  title?: string;
  type?: string;
  bizUsage?: string;
  static names(): { [key: string]: string } {
    return {
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      dataset: 'Dataset',
      id: 'Id',
      intro: 'Intro',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
      title: 'Title',
      type: 'Type',
      bizUsage: 'bizUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMode: 'string',
      createTime: 'string',
      dataset: GetProjectDatasetResponseBodyDataDataset,
      id: 'string',
      intro: 'string',
      modifiedTime: 'string',
      status: 'string',
      title: 'string',
      type: 'string',
      bizUsage: 'string',
    };
  }

  validate() {
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectDatasetResponseBody extends $dara.Model {
  code?: string;
  data?: GetProjectDatasetResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetProjectDatasetResponseBodyData,
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

