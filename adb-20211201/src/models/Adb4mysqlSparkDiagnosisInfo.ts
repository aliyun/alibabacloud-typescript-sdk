// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Adb4MysqlSparkDiagnosisInfo extends $dara.Model {
  /**
   * @remarks
   * The diagnostic code.
   * 
   * @example
   * task_long_tail
   */
  diagnosisCode?: string;
  /**
   * @remarks
   * The diagnostic cause.
   * 
   * @example
   * The query execution duration is long.
   */
  diagnosisCodeLabel?: string;
  /**
   * @remarks
   * The diagnostic suggestion.
   * 
   * @example
   * Check the query execution plan and optimize the SQL.
   */
  diagnosisMsg?: string;
  /**
   * @remarks
   * The diagnostic information type.
   * 
   * @example
   * APPLICATION
   */
  diagnosisType?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosisCode: 'DiagnosisCode',
      diagnosisCodeLabel: 'DiagnosisCodeLabel',
      diagnosisMsg: 'DiagnosisMsg',
      diagnosisType: 'DiagnosisType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosisCode: 'string',
      diagnosisCodeLabel: 'string',
      diagnosisMsg: 'string',
      diagnosisType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

