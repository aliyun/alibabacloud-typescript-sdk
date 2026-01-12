// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSourceFileResponseBodyDataPicList extends $dara.Model {
  createTime?: string;
  fileName?: string;
  id?: string;
  modifiedTime?: string;
  ossKey?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      fileName: 'FileName',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      fileName: 'string',
      id: 'string',
      modifiedTime: 'string',
      ossKey: 'string',
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

export class ListSourceFileResponseBodyDataVideoList extends $dara.Model {
  createTime?: string;
  fileName?: string;
  id?: string;
  modifiedTime?: string;
  ossKey?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      fileName: 'FileName',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      fileName: 'string',
      id: 'string',
      modifiedTime: 'string',
      ossKey: 'string',
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

export class ListSourceFileResponseBodyData extends $dara.Model {
  picList?: ListSourceFileResponseBodyDataPicList[];
  videoList?: ListSourceFileResponseBodyDataVideoList[];
  static names(): { [key: string]: string } {
    return {
      picList: 'PicList',
      videoList: 'VideoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picList: { 'type': 'array', 'itemType': ListSourceFileResponseBodyDataPicList },
      videoList: { 'type': 'array', 'itemType': ListSourceFileResponseBodyDataVideoList },
    };
  }

  validate() {
    if(Array.isArray(this.picList)) {
      $dara.Model.validateArray(this.picList);
    }
    if(Array.isArray(this.videoList)) {
      $dara.Model.validateArray(this.videoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSourceFileResponseBody extends $dara.Model {
  code?: string;
  data?: ListSourceFileResponseBodyData;
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
      data: ListSourceFileResponseBodyData,
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

