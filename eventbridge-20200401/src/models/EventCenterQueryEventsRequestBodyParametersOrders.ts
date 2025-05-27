// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventCenterQueryEventsRequestBodyParametersOrders extends $dara.Model {
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * source
   */
  column?: string;
  /**
   * @remarks
   * Specifies whether to sort the query results in descending order.
   * 
   * @example
   * true
   */
  desc?: boolean;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * AVG
   */
  op?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      desc: 'Desc',
      op: 'Op',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      desc: 'boolean',
      op: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

