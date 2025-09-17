// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessTokensResponseBodyAccessTokensAccessToken extends $dara.Model {
  /**
   * @remarks
   * The ID of the activation code.
   * 
   * @example
   * at-bp1akz2zp67r0k6r****
   */
  accessTokenId?: string;
  /**
   * @remarks
   * The maximum number of times that the activation code can be used. Valid values: 1 to 1000.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  count?: string;
  /**
   * @remarks
   * The time when the activation code was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-09T02:35:44Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the activation code.
   * 
   * @example
   * This is an activation code
   */
  description?: string;
  /**
   * @remarks
   * The name of the activation code.
   * 
   * @example
   * test_name
   */
  name?: string;
  /**
   * @remarks
   * The number of migration sources whose information has been imported to Server Migration Center (SMC) by using the activation code.
   * 
   * @example
   * 5
   */
  registeredCount?: string;
  /**
   * @remarks
   * The status of the activation code. Valid values:
   * 
   * *   activated
   * *   unactivated
   * *   expired
   * 
   * @example
   * activated
   */
  status?: string;
  /**
   * @remarks
   * The validity period of the activation code. Unit: day. Valid values: 1 to 90. Default value: 30.
   * 
   * @example
   * 30
   */
  timeToLiveInDays?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenId: 'AccessTokenId',
      count: 'Count',
      creationTime: 'CreationTime',
      description: 'Description',
      name: 'Name',
      registeredCount: 'RegisteredCount',
      status: 'Status',
      timeToLiveInDays: 'TimeToLiveInDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenId: 'string',
      count: 'string',
      creationTime: 'string',
      description: 'string',
      name: 'string',
      registeredCount: 'string',
      status: 'string',
      timeToLiveInDays: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessTokensResponseBodyAccessTokens extends $dara.Model {
  accessToken?: ListAccessTokensResponseBodyAccessTokensAccessToken[];
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: { 'type': 'array', 'itemType': ListAccessTokensResponseBodyAccessTokensAccessToken },
    };
  }

  validate() {
    if(Array.isArray(this.accessToken)) {
      $dara.Model.validateArray(this.accessToken);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessTokensResponseBody extends $dara.Model {
  /**
   * @remarks
   * The activation codes returned.
   */
  accessTokens?: ListAccessTokensResponseBodyAccessTokens;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   10
   * *   20
   * *   50
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E2DA3097-79B9-53AE-B0DF-281DC54F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of migration sources returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessTokens: 'AccessTokens',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokens: ListAccessTokensResponseBodyAccessTokens,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accessTokens && typeof (this.accessTokens as any).validate === 'function') {
      (this.accessTokens as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

