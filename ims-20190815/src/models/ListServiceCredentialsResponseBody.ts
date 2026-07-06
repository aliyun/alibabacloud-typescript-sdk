// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceCredentialsResponseBodyServiceCredentials extends $dara.Model {
  /**
   * @remarks
   * The time when the service credential was created.
   * 
   * @example
   * 2026-05-07T05:49:57Z
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time. This field is not returned for permanent service credentials.
   * 
   * @example
   * 2026-06-07T05:49:57Z
   * 
   * **if can be null:**
   * true
   */
  expirationTime?: string;
  /**
   * @remarks
   * The ID of the service credential.
   * 
   * @example
   * SC*************
   */
  serviceCredentialId?: string;
  /**
   * @remarks
   * The name of the service credential.
   * 
   * @example
   * test
   */
  serviceCredentialName?: string;
  /**
   * @remarks
   * The service name of the Alibaba Cloud service.
   * 
   * @example
   * xxx.aliyuncs.com
   */
  serviceName?: string;
  /**
   * @remarks
   * The status of the service credential.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expirationTime: 'ExpirationTime',
      serviceCredentialId: 'ServiceCredentialId',
      serviceCredentialName: 'ServiceCredentialName',
      serviceName: 'ServiceName',
      status: 'Status',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expirationTime: 'string',
      serviceCredentialId: 'string',
      serviceCredentialName: 'string',
      serviceName: 'string',
      status: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceCredentialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether there is a next page of results.
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * EXAMPLE*******
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D80A0F97-6F12-5CD1-A70A-77A03BF4CFC5
   */
  requestId?: string;
  /**
   * @remarks
   * The list of service credentials.
   */
  serviceCredentials?: ListServiceCredentialsResponseBodyServiceCredentials[];
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceCredentials: 'ServiceCredentials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceCredentials: { 'type': 'array', 'itemType': ListServiceCredentialsResponseBodyServiceCredentials },
    };
  }

  validate() {
    if(Array.isArray(this.serviceCredentials)) {
      $dara.Model.validateArray(this.serviceCredentials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

