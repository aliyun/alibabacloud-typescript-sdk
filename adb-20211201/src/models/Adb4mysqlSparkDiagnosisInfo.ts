// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Adb4MysqlSparkDiagnosisInfo extends $dara.Model {
  diagnosisCode?: string;
  diagnosisCodeLabel?: string;
  diagnosisMsg?: string;
  /**
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

