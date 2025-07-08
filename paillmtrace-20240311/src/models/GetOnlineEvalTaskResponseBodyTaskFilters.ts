// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOnlineEvalTaskResponseBodyTaskFilters extends $dara.Model {
  /**
   * @remarks
   * Key of the filter condition.
   * 
   * @example
   * ServiceId
   * ServiceName
   * Input
   * Output
   * Status
   * TraceType
   * SpanType
   * TraceName
   * SpanName
   */
  key?: string;
  /**
   * @remarks
   * Filter condition match operator.
   * 
   * @example
   * =
   * StartsWith
   * Contains
   */
  operator?: string;
  /**
   * @remarks
   * Value of the filter condition.
   * 
   * @example
   * foo
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

