// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the agent from which the next page of results starts.
   * 
   * @example
   * my-agent
   */
  after?: string;
  /**
   * @remarks
   * The maximum number of entries to return per request. You can use this parameter together with NextToken to implement paging.
   * 
   * @example
   * 50
   */
  limit?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - desc
   * - asc.
   * 
   * @example
   * acs
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      after: 'After',
      limit: 'Limit',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'string',
      limit: 'string',
      order: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

