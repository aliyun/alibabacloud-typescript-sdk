// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerGroupsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * GID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The creation time of the consumer group, in the format of YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum TPS for consuming messages.
   * 
   * @example
   * 1000
   */
  maxReceiveTps?: number;
  /**
   * @remarks
   * The consumption pattern.
   * 
   * @example
   * LITE_SELECTIVE
   */
  messageModel?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the consumer group.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The status of the consumer group.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The topic name for the lite type.
   * 
   * @example
   * test1
   */
  topicName?: string;
  /**
   * @remarks
   * The last update time of the consumer group, in the format of YYYY-MM-DD HH:mm:ss.
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
   * The paging data.
   */
  list?: ListConsumerGroupsResponseBodyDataList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The paging size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned results.
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
   * The fault code.
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
   * The dynamic fault code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic fault message.
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The fault message.
   * 
   * @example
   * Parameter InstanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Each request has a unique ID, which is active for troubleshooting and locating issues.
   * 
   * @example
   * 5503A460-98ED-5543-92CF-4853DE28****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is execute successfully.
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

