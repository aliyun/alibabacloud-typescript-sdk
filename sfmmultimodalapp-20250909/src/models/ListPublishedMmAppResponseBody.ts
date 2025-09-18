// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishedMmAppResponseBodyPublishedVersionInfoList extends $dara.Model {
  /**
   * @example
   * mm_xxx
   */
  appId?: string;
  /**
   * @example
   * 多模态应用xxx
   */
  appName?: string;
  /**
   * @example
   * 234343
   */
  createUserId?: string;
  /**
   * @example
   * ccccc
   */
  createUserName?: string;
  /**
   * @example
   * xxxx
   */
  description?: string;
  /**
   * @example
   * xxxx
   */
  gmtCreate?: string;
  /**
   * @example
   * xxxx
   */
  publishTime?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      publishTime: 'PublishTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      createUserId: 'string',
      createUserName: 'string',
      description: 'string',
      gmtCreate: 'string',
      publishTime: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishedMmAppResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  publishedVersionInfoList?: ListPublishedMmAppResponseBodyPublishedVersionInfoList[];
  /**
   * @example
   * xxxxxx
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publishedVersionInfoList: 'PublishedVersionInfoList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      publishedVersionInfoList: { 'type': 'array', 'itemType': ListPublishedMmAppResponseBodyPublishedVersionInfoList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.publishedVersionInfoList)) {
      $dara.Model.validateArray(this.publishedVersionInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

