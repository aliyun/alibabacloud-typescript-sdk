// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOnlineEvalTasksResponseBodyTasksFilters extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition.
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
   * The matching operator of the filter condition.
   * 
   * @example
   * =
   * StartsWith
   * Contains
   */
  operator?: string;
  /**
   * @remarks
   * The value of the filter condition.
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

