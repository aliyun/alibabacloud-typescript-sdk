// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPagesResponseBodyPages extends $dara.Model {
  /**
   * @remarks
   * 自定义响应页面内容BASE64编码
   * 
   * This parameter is required.
   * 
   * @example
   * PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=
   */
  content?: string;
  /**
   * @remarks
   * 自定义响应页面内容类型
   * 
   * This parameter is required.
   * 
   * @example
   * text/html
   */
  contentType?: string;
  /**
   * @remarks
   * 自定义响应页面描述
   * 
   * @example
   * a custom deny page
   */
  description?: string;
  /**
   * @example
   * 50000001
   */
  id?: number;
  /**
   * @example
   * custom
   */
  kind?: string;
  /**
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      id: 'Id',
      kind: 'Kind',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      id: 'number',
      kind: 'string',
      name: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPagesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  pages?: ListPagesResponseBodyPages[];
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @example
   * 10
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pages: 'Pages',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pages: { 'type': 'array', 'itemType': ListPagesResponseBodyPages },
      requestId: 'string',
      totalCount: 'number',
      usage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pages)) {
      $dara.Model.validateArray(this.pages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

