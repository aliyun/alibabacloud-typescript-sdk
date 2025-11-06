// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMdsCubeResourcesResponseBodyResultContentDataContentList extends $dara.Model {
  /**
   * @example
   * 0.0.0.1
   */
  androidMaxVersion?: string;
  /**
   * @example
   * 0.0.0.1
   */
  androidMinVersion?: string;
  /**
   * @example
   * 570DA89281533-default
   */
  appCode?: string;
  /**
   * @example
   * 1fbfd6c422762c7083f3bb01c638e48e
   */
  binFileMd5?: string;
  /**
   * @example
   * url
   */
  binPrivateFileUrl?: string;
  /**
   * @example
   * url
   */
  binPublicFileUrl?: string;
  /**
   * @example
   * ""
   */
  extendInfo?: string;
  /**
   * @example
   * 2025-10-24 16:42:45
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-10-24 16:42:45
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 0.0.0.1
   */
  iosMaxVersion?: string;
  /**
   * @example
   * 0.0.0.1
   */
  iosMinVersion?: string;
  /**
   * @example
   * url
   */
  jsonPrivateFileUrl?: string;
  /**
   * @example
   * url
   */
  jsonPublicFileUrl?: string;
  /**
   * @example
   * ""
   */
  minCubeSdkVersion?: string;
  /**
   * @example
   * url
   */
  mockDataDownloadUrl?: string;
  /**
   * @example
   * default
   */
  operator?: string;
  /**
   * @example
   * Android
   */
  platform?: string;
  /**
   * @example
   * url
   */
  previewPictureUrl?: string;
  /**
   * @example
   * 3
   */
  resourceStatus?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * test_template
   */
  templateId?: string;
  /**
   * @example
   * resource desc
   */
  templateResourceDesc?: string;
  /**
   * @example
   * 0.0.0.1
   */
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
  /**
   * @example
   * 0.0.0.1
   */
  currentMaxAndroidVersion?: string;
  /**
   * @example
   * 0.0.0.1
   */
  currentMaxIosVersion?: string;
  /**
   * @example
   * true
   */
  firstPage?: boolean;
  /**
   * @example
   * 0
   */
  firstResult?: number;
  /**
   * @example
   * true
   */
  lastPage?: boolean;
  list?: ListMdsCubeResourcesResponseBodyResultContentDataContentList[];
  /**
   * @example
   * 1
   */
  nextPage?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  prePage?: number;
  /**
   * @example
   * 20
   */
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
  /**
   * @example
   * NONE
   */
  errorCode?: string;
  /**
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  resultMsg?: string;
  /**
   * @example
   * True
   */
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
  /**
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
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
  /**
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * OK
   */
  resultCode?: string;
  resultContent?: ListMdsCubeResourcesResponseBodyResultContent;
  /**
   * @example
   * success
   */
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

