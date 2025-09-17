// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPageSmartShortUrlLogResponseBodyModelList extends $dara.Model {
  /**
   * @example
   * 87
   */
  clickState?: number;
  /**
   * @example
   * 51
   */
  clickTime?: number;
  /**
   * @example
   * 64
   */
  createTime?: number;
  /**
   * @example
   * 示例值示例值
   */
  phoneNumber?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  shortName?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  shortUrl?: string;
  static names(): { [key: string]: string } {
    return {
      clickState: 'ClickState',
      clickTime: 'ClickTime',
      createTime: 'CreateTime',
      phoneNumber: 'PhoneNumber',
      shortName: 'ShortName',
      shortUrl: 'ShortUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clickState: 'number',
      clickTime: 'number',
      createTime: 'number',
      phoneNumber: 'string',
      shortName: 'string',
      shortUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPageSmartShortUrlLogResponseBodyModel extends $dara.Model {
  list?: QueryPageSmartShortUrlLogResponseBodyModelList[];
  /**
   * @example
   * 74
   */
  pageNo?: number;
  /**
   * @example
   * 15
   */
  pageSize?: number;
  /**
   * @example
   * 66
   */
  totalCount?: number;
  /**
   * @example
   * 86
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryPageSmartShortUrlLogResponseBodyModelList },
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
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

export class QueryPageSmartShortUrlLogResponseBody extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: QueryPageSmartShortUrlLogResponseBodyModel;
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: QueryPageSmartShortUrlLogResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

