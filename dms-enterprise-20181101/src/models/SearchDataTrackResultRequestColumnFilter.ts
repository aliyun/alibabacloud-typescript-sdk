// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDataTrackResultRequestColumnFilter extends $dara.Model {
  /**
   * @remarks
   * The end value of the range used in the filter condition. This parameter takes effect only when Operator is set to BETWEEN.
   * 
   * @example
   * 10
   */
  betweenEnd?: string;
  /**
   * @remarks
   * The start value of the range used in the filter condition. This parameter takes effect only when Operator is set to BETWEEN.
   * 
   * @example
   * 1
   */
  betweenStart?: string;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * c_payer_name
   */
  columnName?: string;
  /**
   * @remarks
   * The IN list used in the filter condition. This parameter takes effect only when Operator is set to IN or NOT_IN.
   */
  inList?: string[];
  /**
   * @remarks
   * The type of the operator used to configure the filter condition. Valid values:
   * 
   * *   **EQUAL**: retrieves the column whose value is equal to the specified value.
   * *   **NOT_EQUAL**: retrieves the column whose value is not equal to the specified value.
   * *   **IN**: retrieves the column whose value is in the IN list.
   * *   **BETWEEN**: retrieves the column whose value is in the specified range.
   * *   **LESS**: retrieves the column whose value is less than the specified value.
   * *   **MORE**: retrieves the column whose value is greater than the specified value.
   * *   **NOT_IN**: retrieves the column whose value is not in the IN list.
   * 
   * @example
   * EQUAL
   */
  operator?: string;
  /**
   * @remarks
   * The value used in the filter condition.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      betweenEnd: 'BetweenEnd',
      betweenStart: 'BetweenStart',
      columnName: 'ColumnName',
      inList: 'InList',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      betweenEnd: 'string',
      betweenStart: 'string',
      columnName: 'string',
      inList: { 'type': 'array', 'itemType': 'string' },
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inList)) {
      $dara.Model.validateArray(this.inList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

