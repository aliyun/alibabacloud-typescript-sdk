// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppsRequest extends $dara.Model {
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
   * The Alibaba Cloud account of the app owner. For more information, see [Account Management](https://account.console.aliyun.com/?spm=a2c4g.11186623.2.15.3a8c196eVWxvQB#/secure).
   * 
   * @example
   * 1546564
   */
  appOwner?: number;
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
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appOwner: 'AppOwner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appOwner: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

