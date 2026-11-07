// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The IDs of the applications, separated by commas (,).
   * 
   * @example
   * abcd1@abcde123,abcd1@abcde124
   */
  appIds?: string;
  /**
   * @remarks
   * The end-to-end canary release mode. Valid values:
   * - 0: Route by request content.
   * - 1: Route by proportion.
   * 
   * @example
   * 0
   */
  canaryModel?: number;
  /**
   * @remarks
   * Indicates whether canary release is enabled for databases.
   * 
   * @example
   * true
   */
  dbGrayEnable?: string;
  /**
   * @remarks
   * The entry application.
   * 
   * @example
   * mse:abcd1@a2345
   */
  entryApp?: string;
  /**
   * @remarks
   * The ID of the swimlane group.
   * 
   * @example
   * 2047
   */
  id?: number;
  /**
   * @remarks
   * The side where message queue canary release filtering is performed.
   * 
   * @example
   * Client
   */
  messageQueueFilterSide?: string;
  /**
   * @remarks
   * Specifies whether to enable canary release for message queues.
   * 
   * @example
   * true
   */
  messageQueueGrayEnable?: boolean;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * example-app
   */
  name?: string;
  /**
   * @remarks
   * The name of the MSE namespace.
   * 
   * @example
   * prod
   */
  namespace?: string;
  /**
   * @remarks
   * **[Deprecated]** The paths. This parameter is a list of paths when a Java gateway is used as the entry point.
   * 
   * @example
   * ["/a"]
   */
  paths?: string;
  /**
   * @remarks
   * Specifies whether to record request details.
   * 
   * @example
   * true
   */
  recordCanaryDetail?: boolean;
  /**
   * @remarks
   * The region to which the application belongs.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the user to which the application belongs.
   * 
   * @example
   * 12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      canaryModel: 'CanaryModel',
      dbGrayEnable: 'DbGrayEnable',
      entryApp: 'EntryApp',
      id: 'Id',
      messageQueueFilterSide: 'MessageQueueFilterSide',
      messageQueueGrayEnable: 'MessageQueueGrayEnable',
      name: 'Name',
      namespace: 'Namespace',
      paths: 'Paths',
      recordCanaryDetail: 'RecordCanaryDetail',
      region: 'Region',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      canaryModel: 'number',
      dbGrayEnable: 'string',
      entryApp: 'string',
      id: 'number',
      messageQueueFilterSide: 'string',
      messageQueueGrayEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      paths: 'string',
      recordCanaryDetail: 'boolean',
      region: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSwimmingLaneGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data overview.
   * 
   * @example
   * {}
   */
  data?: CreateOrUpdateSwimmingLaneGroupResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Succ
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE5C32A1-BC0E-4B79-817C-103E4EDF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateOrUpdateSwimmingLaneGroupResponseBodyData,
      errorCode: 'string',
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

