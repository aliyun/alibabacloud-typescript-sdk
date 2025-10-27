// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of workflows that you want to query. Valid values: 1 - 999. Default value: 60.
   * 
   * @example
   * 1
   */
  limit?: number;
  /**
   * @remarks
   * The token to start the query.
   * 
   * @example
   * flow_nextxxx
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
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

