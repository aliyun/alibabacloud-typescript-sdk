// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of application IDs that are separated by commas (,).
   * 
   * @example
   * abcd1@abcde123,abcd1@abcde124
   */
  appIds?: string;
  canaryModel?: number;
  /**
   * @example
   * true
   */
  dbGrayEnable?: string;
  /**
   * @remarks
   * The ingress application.
   * 
   * @example
   * mse:abcd1@a2345
   */
  entryApp?: string;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * @example
   * 2047
   */
  id?: number;
  /**
   * @remarks
   * The side for message filtering when the canary release for messaging feature is enabled.
   * 
   * @example
   * Client
   */
  messageQueueFilterSide?: string;
  /**
   * @remarks
   * Specifies whether to enable canary release for messaging.
   * 
   * @example
   * true
   */
  messageQueueGrayEnable?: boolean;
  /**
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
   * The region where the application resides.
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
   * The response parameters.
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
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request was successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE5C32A1-BC0E-4B79-817C-103E4EDF****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * true: The request was successful. false: The request failed.
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

