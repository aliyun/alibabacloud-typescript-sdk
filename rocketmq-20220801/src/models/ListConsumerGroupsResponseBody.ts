// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerGroupsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Consumer group ID.
   * 
   * @example
   * GID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * Creation time of the consumer group.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum TPS for message sending.
   * 
   * @example
   * 1000
   */
  maxReceiveTps?: number;
  /**
   * @example
   * LITE_SELECTIVE
   */
  messageModel?: string;
  /**
   * @remarks
   * The region ID to which the instance belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Remark information of the consumer group.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * Status of the consumer group.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * test1
   */
  topicName?: string;
  /**
   * @remarks
   * Last update time of the consumer group.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      createTime: 'createTime',
      instanceId: 'instanceId',
      maxReceiveTps: 'maxReceiveTps',
      messageModel: 'messageModel',
      regionId: 'regionId',
      remark: 'remark',
      status: 'status',
      topicName: 'topicName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      createTime: 'string',
      instanceId: 'string',
      maxReceiveTps: 'number',
      messageModel: 'string',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      topicName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The consumer groups.
   */
  list?: ListConsumerGroupsResponseBodyDataList[];
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of returned results.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListConsumerGroupsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListConsumerGroupsResponseBodyData;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * xxx
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * xxx
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Parameter InstanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * Request ID, each request has a unique ID that can be used for troubleshooting and problem localization.
   * 
   * @example
   * 5503A460-98ED-5543-92CF-4853DE28****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the execution was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListConsumerGroupsResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

