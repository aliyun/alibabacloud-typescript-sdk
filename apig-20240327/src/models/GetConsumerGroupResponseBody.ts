// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of consumers in the consumer group.
   * 
   * @example
   * 3
   */
  consumerCount?: number;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * csg-8c13d2b4f8a1
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The time when the consumer group was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1715769600000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The description of the consumer group.
   * 
   * @example
   * Used to group production API consumers
   */
  description?: string;
  /**
   * @remarks
   * The gateway type. Valid values: API and AI.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * @example
   * api-consumer-group
   */
  name?: string;
  /**
   * @remarks
   * The time when the consumer group was updated. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1715769600000
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      consumerCount: 'consumerCount',
      consumerGroupId: 'consumerGroupId',
      createTimestamp: 'createTimestamp',
      description: 'description',
      gatewayType: 'gatewayType',
      name: 'name',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerCount: 'number',
      consumerGroupId: 'string',
      createTimestamp: 'number',
      description: 'string',
      gatewayType: 'string',
      name: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. Ok is returned if the request succeeds.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetConsumerGroupResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetConsumerGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
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

