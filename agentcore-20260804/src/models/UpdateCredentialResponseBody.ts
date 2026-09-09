// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCredentialResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC, formatted according to RFC 3339.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The credential ID.
   * 
   * @example
   * cred-123456
   */
  credentialId?: string;
  /**
   * @remarks
   * The masked credential content. If credentialType is set to apiKey, the apiKey value is returned as asterisks (*) of equal length.
   * 
   * @example
   * {"apiKey":"****************"}
   */
  credentialMetadata?: string;
  /**
   * @remarks
   * The credential type. Currently, only apiKey is supported.
   * 
   * @example
   * apiKey
   */
  credentialType?: string;
  /**
   * @remarks
   * The credential description. The description can be up to 256 characters in length.
   * 
   * @example
   * API Key used for calling model services in the production environment
   */
  description?: string;
  /**
   * @remarks
   * The credential name. The name must be unique within the workspace and can contain only letters, digits, periods (.), underscores (_), and hyphens (-). The name must be 3 to 128 characters in length and cannot use runtime reserved names.
   * 
   * @example
   * model-api-key
   */
  name?: string;
  /**
   * @remarks
   * The region ID where the resource resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time of the most recent modification in UTC, formatted according to RFC 3339.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      credentialId: 'credentialId',
      credentialMetadata: 'credentialMetadata',
      credentialType: 'credentialType',
      description: 'description',
      name: 'name',
      regionId: 'regionId',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      credentialId: 'string',
      credentialMetadata: 'string',
      credentialType: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The updated credential information.
   */
  data?: UpdateCredentialResponseBodyData;
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
   * The response message. An error description is returned if the request fails.
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
   * request-123456
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
      data: UpdateCredentialResponseBodyData,
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

