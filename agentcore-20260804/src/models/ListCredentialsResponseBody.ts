// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCredentialsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The number of agents bound to this credential.
   * 
   * @example
   * 2
   */
  boundAgentsCounts?: number;
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
   * The masked content of the credential. When credentialType is apiKey, the apiKey value is returned with equal-length asterisks (*).
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
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time of the last modification in UTC, formatted according to RFC 3339.
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
      boundAgentsCounts: 'boundAgentsCounts',
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
      boundAgentsCounts: 'number',
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

export class ListCredentialsResponseBody extends $dara.Model {
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
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of credentials.
   */
  items?: ListCredentialsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of records per page that takes effect for this query.
   * 
   * @example
   * 10
   */
  maxResults?: number;
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
   * The pagination token for the next page. This value is empty if no more pages are available.
   * 
   * @example
   * 10
   */
  nextToken?: string;
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
  /**
   * @remarks
   * The total number of credentials that match the query conditions.
   * 
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListCredentialsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

