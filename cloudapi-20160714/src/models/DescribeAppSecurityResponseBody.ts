// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppSecurityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AppCode of the app.
   * 
   * @example
   * 3aaf905a0a1f4f0eabc6d891dfa08afc
   */
  appCode?: string;
  /**
   * @remarks
   * The key of the app.
   * 
   * @example
   * 60030986
   */
  appKey?: string;
  /**
   * @remarks
   * The password of the app.
   * 
   * @example
   * c1ae97aaa7e45f21d10824bc44678fee
   */
  appSecret?: string;
  /**
   * @remarks
   * The creation time (UTC) of the key, which is the same as the app creation time.
   * 
   * @example
   * 2016-07-31T04:10:19Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The modification time (UTC) of the key.
   * 
   * @example
   * 2016-07-31T04:10:19Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      createdTime: 'CreatedTime',
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appKey: 'string',
      appSecret: 'string',
      createdTime: 'string',
      modifiedTime: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

