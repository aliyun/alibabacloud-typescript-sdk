// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQueueConsumersResponseBodyDataConsumers } from "./ListQueueConsumersResponseBodyDataConsumers";


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

