// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsyncInvokeConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The function name. If you do not configure this parameter, the asynchronous invocation configurations of all functions are displayed.
   * 
   * @example
   * my-func
   */
  functionName?: string;
  /**
   * @remarks
   * The maximum number of entries to be returned.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The paging information. This parameter specifies the start point of the query.
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

