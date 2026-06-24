// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOpenSourceAccountsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud UID.
   * 
   * @example
   * 12345678900123
   */
  aliyunUserId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * amqp-abc***
   */
  CInstanceId?: string;
  /**
   * @remarks
   * The time when the user was created.
   * 
   * @example
   * 1704067200000
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * {}
   */
  extraJson?: string;
  /**
   * @remarks
   * The hash algorithm.
   * 
   * @example
   * bcrypt
   */
  hashingAlgorithm?: string;
  /**
   * @remarks
   * The quota configuration.
   * 
   * @example
   * null
   */
  limits?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The password hash.
   * 
   * @example
   * f6af6bbb91e947d988d191bfe01c9a9b
   */
  passwordHash?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * test
   */
  tags?: string;
  /**
   * @remarks
   * Indicates whether the password is a weak password. Valid values:
   * - 0: No.
   * - 1: Yes.
   */
  weakPassword?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunUserId: 'AliyunUserId',
      CInstanceId: 'CInstanceId',
      createTime: 'CreateTime',
      extraJson: 'ExtraJson',
      hashingAlgorithm: 'HashingAlgorithm',
      limits: 'Limits',
      name: 'Name',
      passwordHash: 'PasswordHash',
      tags: 'Tags',
      weakPassword: 'WeakPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUserId: 'number',
      CInstanceId: 'string',
      createTime: 'string',
      extraJson: 'string',
      hashingAlgorithm: 'string',
      limits: 'string',
      name: 'string',
      passwordHash: 'string',
      tags: 'string',
      weakPassword: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenSourceAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListOpenSourceAccountsResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The token that marks the end of the current query. This token is passed as a parameter in the next call to continue pagination. Set this parameter to an empty string for the first call or when the last page is returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 021788F6-E50C-4BD6-9F80-66B0A19A****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListOpenSourceAccountsResponseBodyData },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

