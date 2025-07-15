// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppAttributesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * N can be an integer from 1 to 20.``
   * 
   * This parameter is required.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * N can be an integer from 1 to 20.``
   * 
   * @example
   * \\" \\"
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The AppCode of the app.
   * 
   * @example
   * 23552160
   */
  appCode?: string;
  /**
   * @remarks
   * The ID of the app.
   * 
   * @example
   * 20112314518278
   */
  appId?: number;
  /**
   * @remarks
   * The app key that is used to make an API call.
   * 
   * @example
   * 203708622
   */
  appKey?: string;
  /**
   * @remarks
   * The name of the app.
   * 
   * @example
   * testApp
   */
  appName?: string;
  /**
   * @remarks
   * Specifies whether to enable tag verification.
   * 
   * @example
   * true
   */
  enableTagAuth?: boolean;
  /**
   * @remarks
   * 扩展信息
   * 
   * @example
   * 110243810311
   */
  extend?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * The order. Valid values: asc and desc. Default value: desc.
   * 
   * *   asc: The apps are displayed in ascending order of modification time.
   * *   desc: The apps are displayed in descending order of modification time.
   * 
   * @example
   * desc
   */
  sort?: string;
  /**
   * @remarks
   * The tag of objects that match the rule. You can specify multiple tags.
   * 
   * @example
   * Key， Value
   */
  tag?: DescribeAppAttributesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appId: 'AppId',
      appKey: 'AppKey',
      appName: 'AppName',
      enableTagAuth: 'EnableTagAuth',
      extend: 'Extend',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      sort: 'Sort',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appId: 'number',
      appKey: 'string',
      appName: 'string',
      enableTagAuth: 'boolean',
      extend: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      sort: 'string',
      tag: { 'type': 'array', 'itemType': DescribeAppAttributesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

