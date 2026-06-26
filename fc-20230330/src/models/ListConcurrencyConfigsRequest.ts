// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConcurrencyConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The function name. If you do not specify this parameter, the concurrency configurations of all functions are listed.
   * 
   * @example
   * my-func
   */
  functionName?: string;
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The token for paging.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      limit: 'limit',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
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

