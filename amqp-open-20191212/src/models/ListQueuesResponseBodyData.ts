// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQueuesResponseBodyDataQueues } from "./ListQueuesResponseBodyDataQueues";


export class ListQueuesResponseBodyData extends $dara.Model {
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
  /**
   * @remarks
   * The queues.
   */
  queues?: ListQueuesResponseBodyDataQueues[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      queues: 'Queues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      queues: { 'type': 'array', 'itemType': ListQueuesResponseBodyDataQueues },
    };
  }

  validate() {
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

