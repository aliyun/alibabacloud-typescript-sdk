// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDefinedEventSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * testBus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The maximum number of entries to return per request. You can use this parameter with NextToken to paginate results. The maximum value is 100.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The prefix of the event source name.
   * 
   * @example
   * testName
   */
  namePrefix?: string;
  /**
   * @remarks
   * The token returned when Limit is specified and additional results are available.
   * 
   * @example
   * 100
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      limit: 'Limit',
      namePrefix: 'NamePrefix',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      limit: 'number',
      namePrefix: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

