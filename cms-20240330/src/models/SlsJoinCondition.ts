// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SlsJoinCondition extends $dara.Model {
  /**
   * @remarks
   * The left field in the format $<query_idx>.<field>, such as $0.hostIp.
   * 
   * @example
   * request_id
   */
  lhsField?: string;
  /**
   * @remarks
   * The comparison operator. Valid values: ==, !=, <, >, <=, and >=.
   * 
   * @example
   * =
   */
  operator?: string;
  /**
   * @remarks
   * The right field in the format $<query_idx>.<field>, such as $1.hostIp.
   * 
   * @example
   * trace_id
   */
  rhsField?: string;
  static names(): { [key: string]: string } {
    return {
      lhsField: 'lhsField',
      operator: 'operator',
      rhsField: 'rhsField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lhsField: 'string',
      operator: 'string',
      rhsField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

