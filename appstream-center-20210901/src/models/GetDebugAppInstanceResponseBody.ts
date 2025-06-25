// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDebugAppInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * __DEBUG_APP
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the application instance.
   * 
   * @example
   * ai-7ybdeiyoeh5e****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The ID of the application version.
   * 
   * @example
   * 1.1
   */
  appVersion?: string;
  /**
   * @remarks
   * The authorization code. This authorization code is valid for 3 minutes and can be used only once, regardless of whether the authentication succeeds. If multiple authentication codes are generated for a user, only the latest authentication code takes effect.
   * 
   * @example
   * e4e169bea1cc48e8afac53**********
   */
  authCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * __debug__
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appVersion: 'AppVersion',
      authCode: 'AuthCode',
      requestId: 'RequestId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appVersion: 'string',
      authCode: 'string',
      requestId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

