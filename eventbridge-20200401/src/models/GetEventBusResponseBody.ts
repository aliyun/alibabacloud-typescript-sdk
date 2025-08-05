// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventBusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The timestamp that indicates when the event bus was created.
   * 
   * @example
   * 1641781825000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The description of the event bus.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the event bus.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:123456789098****:eventbus/MyEventBus
   */
  eventBusARN?: string;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * MyEventBus
   */
  eventBusName?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      eventBusARN: 'EventBusARN',
      eventBusName: 'EventBusName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      description: 'string',
      eventBusARN: 'string',
      eventBusName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventBusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value Success indicates that the request was successful. Other values indicate that the request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetEventBusResponseBodyData;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * EventBusNotExist
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * d5bfc188-4452-4ba7-b73a-a9005e522439
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. If the operation was successful, the value true is returned.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEventBusResponseBodyData,
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

