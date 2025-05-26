// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBadSqlDetectionResponseBodyDetectionItemsResultsDiagnosisResults extends $dara.Model {
  /**
   * @remarks
   * The diagnostic code.
   * 
   * @example
   * Large amounts of data are returned to the client.
   */
  code?: string;
  /**
   * @remarks
   * The information about the diagnostic result.
   * 
   * @example
   * Large amounts of data are returned to the client. Import the data to OSS.
   */
  detail?: string;
  /**
   * @remarks
   * The operator ID.
   * 
   * @example
   * TableScan[234]
   */
  operatorId?: string;
  /**
   * @remarks
   * The stage ID.
   * 
   * @example
   * Stage[67]
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

