// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyLastUsedInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * LTAI****************
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 104758519118****
   */
  accountId?: string;
  /**
   * @remarks
   * The type of the account to which the AccessKey pair belongs.
   * 
   * @example
   * ram-user
   */
  accountType?: string;
  /**
   * @remarks
   * The details about the event.
   * 
   * @example
   * {
   *   "eventId": "239EB588-CD24-522E-B0B5-174A1A58****",
   *   "eventVersion": 1,
   *   "eventSource": "ecs.cn-hangzhou.aliyuncs.com",
   *   "sourceIpAddress": "``10.10.**.**``",
   *   "eventType": "ApiCall",
   *   "userIdentity": {
   *     "accountId": "104758519118****",
   *     "principalId": "24549429003625****",
   *     "type": "ram-user",
   *     "userName": "alice"
   *   },
   *   "serviceName": "Ecs",
   *   "apiVersion": "2016-01-20",
   *   "requestId": "239EB588-CD24-522E-B0B5-174A1A588BE0",
   *   "eventTime": "2021-08-05T09:21:32Z",
   *   "isGlobal": false,
   *   "acsRegion": "cn-hangzhou",
   *   "eventName": "DescribeInstances"
   * }
   */
  detail?: string;
  /**
   * @remarks
   * The ID of the account to which the AccessKey pair belongs.
   * 
   * @example
   * 24549429003625****
   */
  ownerId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * 239EB588-CD24-522E-B0B5-174A1A588BE0
   */
  requestId?: string;
  /**
   * @remarks
   * The Alibaba Cloud service that was last accessed.
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  serviceName?: string;
  /**
   * @remarks
   * The Chinese name of the Alibaba Cloud service that was last accessed.
   * 
   * @example
   * Elastic Compute Service (ECS)
   */
  serviceNameCn?: string;
  /**
   * @remarks
   * The English name of the Alibaba Cloud service that was last accessed.
   * 
   * @example
   * Elastic Compute Service
   */
  serviceNameEn?: string;
  /**
   * @remarks
   * The event source.
   * 
   * @example
   * ManagementEvent
   */
  source?: string;
  /**
   * @remarks
   * The timestamp when the AccessKey pair was last called.
   * 
   * This parameter is required.
   * 
   * @example
   * 1657247532000
   */
  usedTimestamp?: number;
  /**
   * @remarks
   * The name of the account to which the AccessKey pair belongs.
   * 
   * If the value of the AccountType parameter is root-account, the value of the UserName parameter is root. If the value of the AccountType parameter is ram-user, the value of the UserName parameter is the name of a RAM user.
   * 
   * @example
   * alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accountId: 'AccountId',
      accountType: 'AccountType',
      detail: 'Detail',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
      serviceNameCn: 'ServiceNameCn',
      serviceNameEn: 'ServiceNameEn',
      source: 'Source',
      usedTimestamp: 'UsedTimestamp',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accountId: 'string',
      accountType: 'string',
      detail: 'string',
      ownerId: 'string',
      requestId: 'string',
      serviceName: 'string',
      serviceNameCn: 'string',
      serviceNameEn: 'string',
      source: 'string',
      usedTimestamp: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

