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
   * The maximum number of entries to be returned in a call. You can use this parameter and NextToken to implement paging. Note: Up to 100 entries can be returned in a call.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The name of the event source.
   * 
   * @example
   * testName
   */
  namePrefix?: string;
  /**
   * @remarks
   * If you configure Limit and excess return values exist, this parameter is returned.
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

