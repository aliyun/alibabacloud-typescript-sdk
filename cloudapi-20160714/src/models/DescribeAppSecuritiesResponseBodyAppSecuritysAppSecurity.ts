// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppSecuritiesResponseBodyAppSecuritysAppSecurity extends $dara.Model {
  /**
   * @remarks
   * The application AppCode.
   * 
   * @example
   * d2350ecd62c44cbfbe35a7f182e35105
   */
  appCode?: string;
  /**
   * @remarks
   * The application AppKey.
   * 
   * @example
   * 34379343
   */
  appKey?: string;
  /**
   * @remarks
   * The application AppSecret.
   * 
   * @example
   * ea5291a7aff343769eb3139a2f6de8c9
   */
  appSecret?: string;
  /**
   * @remarks
   * The time when the AppKey was created.
   * 
   * @example
   * 2021-09-14T18:50:59
   */
  createdTime?: string;
  /**
   * @remarks
   * The time when the AppSecret was last modified. The time is displayed in UTC.
   * 
   * @example
   * 2023-08-14T18:03:00+08:00
   */
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      createdTime: 'CreatedTime',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appKey: 'string',
      appSecret: 'string',
      createdTime: 'string',
      modifiedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

