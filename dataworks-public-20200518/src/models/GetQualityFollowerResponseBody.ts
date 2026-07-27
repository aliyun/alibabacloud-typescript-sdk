// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityFollowerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The alarm notification method. Valid values:
   * 
   * - 1: by email
   * 
   * - 2: by email and SMS
   * 
   * - 4: by DingTalk chatbot or webhook
   * 
   * - 5: by DingTalk chatbot with the @all keyword
   * 
   * @example
   * 1
   */
  alarmMode?: number;
  /**
   * @remarks
   * The time when the subscription was created. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1541576644000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the partition expression.
   * 
   * @example
   * 1234
   */
  entityId?: string;
  /**
   * @remarks
   * The follower who receives alarm notifications.
   * 
   * @example
   * 1234
   */
  follower?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the follower.
   * 
   * @example
   * test
   */
  followerAccountName?: string;
  /**
   * @remarks
   * The subscription ID.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The time when the subscription was last updated. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1541576644000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the engine or data source.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the partitioned table.
   * 
   * @example
   * dual
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmMode: 'AlarmMode',
      createTime: 'CreateTime',
      entityId: 'EntityId',
      follower: 'Follower',
      followerAccountName: 'FollowerAccountName',
      id: 'Id',
      modifyTime: 'ModifyTime',
      projectName: 'ProjectName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmMode: 'number',
      createTime: 'number',
      entityId: 'string',
      follower: 'string',
      followerAccountName: 'string',
      id: 'number',
      modifyTime: 'number',
      projectName: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityFollowerResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of follower objects.
   */
  data?: GetQualityFollowerResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * You have no permission.
   */
  errorMessage?: string;
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
   * The request ID.
   * 
   * @example
   * 38cbdef0-f6cf-49
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetQualityFollowerResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

