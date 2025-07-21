// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueueConsumersResponseBodyDataConsumers extends $dara.Model {
  /**
   * @remarks
   * The consumer tag.
   * 
   * @example
   * sgen-1
   */
  consumerTag?: string;
  static names(): { [key: string]: string } {
    return {
      consumerTag: 'ConsumerTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueConsumersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The consumers.
   */
  consumers?: ListQueueConsumersResponseBodyDataConsumers[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current returned page. If this parameter is empty, all data is retrieved.
   * 
   * @example
   * caebacccb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      consumers: 'Consumers',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumers: { 'type': 'array', 'itemType': ListQueueConsumersResponseBodyDataConsumers },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.consumers)) {
      $dara.Model.validateArray(this.consumers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueConsumersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListQueueConsumersResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4409B7D5-E4EC-4EB5-804A-385DCDFCD***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListQueueConsumersResponseBodyData,
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

