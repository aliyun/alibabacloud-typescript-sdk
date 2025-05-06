// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregatorsResponseBodyAggregatorsResult } from "./ListAggregatorsResponseBodyAggregatorsResult";


export class ListAggregatorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The account groups.
   */
  aggregatorsResult?: ListAggregatorsResponseBodyAggregatorsResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20C8526D-12C5-4336-BC72-EBD5D1BA732F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorsResult: 'AggregatorsResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorsResult: ListAggregatorsResponseBodyAggregatorsResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.aggregatorsResult && typeof (this.aggregatorsResult as any).validate === 'function') {
      (this.aggregatorsResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

