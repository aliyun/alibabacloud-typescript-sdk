// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventBusesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return in a request. You can use this parameter and NextToken to implement paging.
   * 
   * >  A maximum of 100 entries can be returned in a request.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The prefix of the names of the event buses that you want to query.
   * 
   * @example
   * My
   */
  namePrefix?: string;
  /**
   * @remarks
   * If you configure Limit and excess return values exist, this parameter is returned. You can use this parameter and Limit to implement paging.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      namePrefix: 'NamePrefix',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

