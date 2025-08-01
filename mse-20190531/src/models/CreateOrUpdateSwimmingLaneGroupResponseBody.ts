// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneGroupResponseBodyData extends $dara.Model {
  /**
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
   * @example
   * mse:abcd1@a2345
   */
  entryApp?: string;
  id?: number;
  /**
   * @example
   * Client
   */
  messageQueueFilterSide?: string;
  messageQueueGrayEnable?: boolean;
  /**
   * @example
   * example-app
   */
  name?: string;
  /**
   * @example
   * prod
   */
  namespace?: string;
  paths?: string;
  recordCanaryDetail?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
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

