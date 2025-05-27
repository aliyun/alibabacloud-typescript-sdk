// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventCenterQueryEventsRequestBodyParametersCalculations extends $dara.Model {
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
   * The operator.
   * 
   * @example
   * COUNT_DISTINCT
   */
  op?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      op: 'Op',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
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

