// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessApplicationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The access application ID.
   * 
   * @example
   * app-1234567890
   */
  applicationId?: string;
  /**
   * @remarks
   * The name of the access application.
   * 
   * @example
   * my-access-application
   */
  applicationName?: string;
  /**
   * @remarks
   * The OAuth client ID.
   * 
   * @example
   * client-1234567890
   */
  clientId?: string;
  /**
   * @remarks
   * The creation time in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The metadata URL of the identity provider.
   * 
   * @example
   * https://example.com/.well-known/openid-configuration
   */
  metadataUrl?: string;
  /**
   * @remarks
   * The list of redirect URIs.
   */
  redirectUris?: string[];
  /**
   * @remarks
   * The update time in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The user source.
   * 
   * @example
   * RAM
   */
  userSource?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-1234567890
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'applicationId',
      applicationName: 'applicationName',
      clientId: 'clientId',
      createdAt: 'createdAt',
      metadataUrl: 'metadataUrl',
      redirectUris: 'redirectUris',
      updatedAt: 'updatedAt',
      userSource: 'userSource',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      clientId: 'string',
      createdAt: 'string',
      metadataUrl: 'string',
      redirectUris: { 'type': 'array', 'itemType': 'string' },
      updatedAt: 'string',
      userSource: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.redirectUris)) {
      $dara.Model.validateArray(this.redirectUris);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The access application details.
   */
  data?: GetAccessApplicationResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message about the request processing result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAccessApplicationResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

