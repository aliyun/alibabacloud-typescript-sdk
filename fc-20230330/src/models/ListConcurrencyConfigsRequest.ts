// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConcurrencyConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The function name. If you leave this parameter empty, the concurrency configurations of all functions are returned.
   * 
   * @example
   * my-func
   */
  functionName?: string;
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
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

