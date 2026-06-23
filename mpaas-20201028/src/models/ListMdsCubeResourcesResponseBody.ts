// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMdsCubeResourcesResponseBodyResultContentDataContentList extends $dara.Model {
  androidMaxVersion?: string;
  androidMinVersion?: string;
  appCode?: string;
  binFileMd5?: string;
  binPrivateFileUrl?: string;
  binPublicFileUrl?: string;
  extendInfo?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  iosMaxVersion?: string;
  iosMinVersion?: string;
  jsonPrivateFileUrl?: string;
  jsonPublicFileUrl?: string;
  minCubeSdkVersion?: string;
  mockDataDownloadUrl?: string;
  operator?: string;
  platform?: string;
  previewPictureUrl?: string;
  resourceStatus?: number;
  status?: number;
  templateId?: string;
  templateResourceDesc?: string;
  templateResourceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      androidMaxVersion: 'AndroidMaxVersion',
      androidMinVersion: 'AndroidMinVersion',
      appCode: 'AppCode',
      binFileMd5: 'BinFileMd5',
      binPrivateFileUrl: 'BinPrivateFileUrl',
      binPublicFileUrl: 'BinPublicFileUrl',
      extendInfo: 'ExtendInfo',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      iosMaxVersion: 'IosMaxVersion',
      iosMinVersion: 'IosMinVersion',
      jsonPrivateFileUrl: 'JsonPrivateFileUrl',
      jsonPublicFileUrl: 'JsonPublicFileUrl',
      minCubeSdkVersion: 'MinCubeSdkVersion',
      mockDataDownloadUrl: 'MockDataDownloadUrl',
      operator: 'Operator',
      platform: 'Platform',
      previewPictureUrl: 'PreviewPictureUrl',
      resourceStatus: 'ResourceStatus',
      status: 'Status',
      templateId: 'TemplateId',
      templateResourceDesc: 'TemplateResourceDesc',
      templateResourceVersion: 'TemplateResourceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidMaxVersion: 'string',
      androidMinVersion: 'string',
      appCode: 'string',
      binFileMd5: 'string',
      binPrivateFileUrl: 'string',
      binPublicFileUrl: 'string',
      extendInfo: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      iosMaxVersion: 'string',
      iosMinVersion: 'string',
      jsonPrivateFileUrl: 'string',
      jsonPublicFileUrl: 'string',
      minCubeSdkVersion: 'string',
      mockDataDownloadUrl: 'string',
      operator: 'string',
      platform: 'string',
      previewPictureUrl: 'string',
      resourceStatus: 'number',
      status: 'number',
      templateId: 'string',
      templateResourceDesc: 'string',
      templateResourceVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMdsCubeResourcesResponseBodyResultContentDataContent extends $dara.Model {
  currentMaxAndroidVersion?: string;
  currentMaxIosVersion?: string;
  firstPage?: boolean;
  firstResult?: number;
  lastPage?: boolean;
  list?: ListMdsCubeResourcesResponseBodyResultContentDataContentList[];
  nextPage?: number;
  pageNo?: number;
  pageSize?: number;
  prePage?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentMaxAndroidVersion: 'CurrentMaxAndroidVersion',
      currentMaxIosVersion: 'CurrentMaxIosVersion',
      firstPage: 'FirstPage',
      firstResult: 'FirstResult',
      lastPage: 'LastPage',
      list: 'List',
      nextPage: 'NextPage',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentMaxAndroidVersion: 'string',
      currentMaxIosVersion: 'string',
      firstPage: 'boolean',
      firstResult: 'number',
      lastPage: 'boolean',
      list: { 'type': 'array', 'itemType': ListMdsCubeResourcesResponseBodyResultContentDataContentList },
      nextPage: 'number',
      pageNo: 'number',
      pageSize: 'number',
      prePage: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMdsCubeResourcesResponseBodyResultContentData extends $dara.Model {
  content?: ListMdsCubeResourcesResponseBodyResultContentDataContent;
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ListMdsCubeResourcesResponseBodyResultContentDataContent,
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMdsCubeResourcesResponseBodyResultContent extends $dara.Model {
  data?: ListMdsCubeResourcesResponseBodyResultContentData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMdsCubeResourcesResponseBodyResultContentData,
      requestId: 'string',
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

export class ListMdsCubeResourcesResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: ListMdsCubeResourcesResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: ListMdsCubeResourcesResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.resultContent && typeof (this.resultContent as any).validate === 'function') {
      (this.resultContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

