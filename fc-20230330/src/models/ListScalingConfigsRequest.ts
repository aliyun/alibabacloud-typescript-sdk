// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScalingConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The function name.
   * 
   * @example
   * my-func
   */
  functionName?: string;
  /**
   * @remarks
   * The number of auto scaling configurations to return.
   * 
   * @example
   * 20
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

