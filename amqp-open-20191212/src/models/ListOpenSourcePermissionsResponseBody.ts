// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOpenSourcePermissionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud UID.
   * 
   * @example
   * 1234567890123456
   */
  aliyunUserId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * amqp-cn-v0h1kb9nu***
   */
  CInstanceId?: string;
  /**
   * @remarks
   * The regular expression for configure permissions.
   * 
   * @example
   * ^$
   */
  configure?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * shhtzn
   */
  name?: string;
  /**
   * @remarks
   * The regular expression for read permissions.
   * 
   * @example
   * ^$
   */
  read?: string;
  /**
   * @remarks
   * The vhost name.
   * 
   * @example
   * production
   */
  vhost?: string;
  /**
   * @remarks
   * The regular expression for write permissions.
   * 
   * @example
   * order_exchange
   */
  write?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUserId: 'AliyunUserId',
      CInstanceId: 'CInstanceId',
      configure: 'Configure',
      name: 'Name',
      read: 'Read',
      vhost: 'Vhost',
      write: 'Write',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUserId: 'number',
      CInstanceId: 'string',
      configure: 'string',
      name: 'string',
      read: 'string',
      vhost: 'string',
      write: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenSourcePermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListOpenSourcePermissionsResponseBodyData[];
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 50
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
   * The token for the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FEBA5E0C-50D0-4FA6-A794-4901E5465***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: { 'type': 'array', 'itemType': ListOpenSourcePermissionsResponseBodyData },
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

