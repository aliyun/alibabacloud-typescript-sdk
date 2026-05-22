// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPageResponseBody extends $dara.Model {
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
   * @remarks
   * 自定义响应页面ID
   * 
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
   * @remarks
   * 自定义响应页面名称
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  siteIds?: number[];
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
      requestId: 'RequestId',
      siteIds: 'SiteIds',
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
      requestId: 'string',
      siteIds: { 'type': 'array', 'itemType': 'number' },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.siteIds)) {
      $dara.Model.validateArray(this.siteIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

