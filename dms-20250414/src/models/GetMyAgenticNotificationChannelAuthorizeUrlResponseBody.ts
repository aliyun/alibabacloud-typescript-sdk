// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMyAgenticNotificationChannelAuthorizeUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The URL of the Lark OAuth authorization page. After the user opens the URL in a browser and completes the authorization, the system binds the Lark account as the notification identity for the current user, and the channel switch remains unchanged. The state parameter in the URL is valid for 180 seconds and can be used only once.
   * 
   * @example
   * https://open.feishu.cn/open-apis/authen/v1/authorize?app_id=cli_a5f8e2d9c3b1****&redirect_uri=https%3A%2F%2Faig-dms-cn-hangzhou.aliyuncs.com%2Foauth%2Fmobile%2Ffeishu%2Fbind&state=eyJhbGciOiJIUzI1NiJ9****
   */
  authorizeUrl?: string;
  /**
   * @remarks
   * The callback URL after the authorization is completed. You must add this URL to the redirect URL whitelist of the tenant\\"s Lark application. Otherwise, the authorization fails.
   * 
   * @example
   * https://aig-dms-cn-hangzhou.aliyuncs.com/oauth/mobile/feishu/bind
   */
  redirectUri?: string;
  static names(): { [key: string]: string } {
    return {
      authorizeUrl: 'AuthorizeUrl',
      redirectUri: 'RedirectUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeUrl: 'string',
      redirectUri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMyAgenticNotificationChannelAuthorizeUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorization URL information.
   */
  data?: GetMyAgenticNotificationChannelAuthorizeUrlResponseBodyData;
  /**
   * @remarks
   * The error code returned when the request fails.
   * 
   * @example
   * INVALID_PARAMETER
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * channel must be FEISHU
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - true: The request is successful.
   * - false: The request fails.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMyAgenticNotificationChannelAuthorizeUrlResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

