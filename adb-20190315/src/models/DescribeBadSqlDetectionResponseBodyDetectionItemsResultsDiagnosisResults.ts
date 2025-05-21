// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBadSqlDetectionResponseBodyDetectionItemsResultsDiagnosisResults extends $dara.Model {
  /**
   * @remarks
   * The diagnostic code.
   * 
   * @example
   * FILTER_NOT_PUSHDOWN
   */
  code?: string;
  /**
   * @remarks
   * The information about the diagnostic result.
   * 
   * @example
   * The query consumes a large amount of memory resources. Perform memory optimization on the query.
   */
  detail?: string;
  /**
   * @remarks
   * The operator ID.
   * 
   * @example
   * Join[234]
   */
  operatorId?: string;
  /**
   * @remarks
   * The stage ID.
   * 
   * @example
   * Stage[1]
   */
  stageId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      operatorId: 'OperatorId',
      stageId: 'StageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: 'string',
      operatorId: 'string',
      stageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

