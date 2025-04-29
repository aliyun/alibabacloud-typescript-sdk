// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppsByApiProductResponseBodyAuthorizedAppsAuthorizedApp extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 110982419
   */
  appId?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * APP_02580_DEV
   */
  appName?: string;
  /**
   * @remarks
   * The expiration time of the authorization. The time is in GMT. An empty value indicates that the authorization does not expire.
   * 
   * @example
   * 2023-06-17T03:41:53Z
   */
  authValidTime?: string;
  /**
   * @remarks
   * The time when the authorization was created. The time is in GMT.
   * 
   * @example
   * 2016-07-21T06:17:20Z
   */
  authorizedTime?: string;
  /**
   * @remarks
   * The authorization description.
   * 
   * @example
   * Test share with nsc qiming
   */
  description?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * extra info
   */
  extend?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      authValidTime: 'AuthValidTime',
      authorizedTime: 'AuthorizedTime',
      description: 'Description',
      extend: 'Extend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      authValidTime: 'string',
      authorizedTime: 'string',
      description: 'string',
      extend: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

