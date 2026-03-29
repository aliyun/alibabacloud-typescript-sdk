// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataDiagnosisResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  dataDiagnosisId?: string;
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiagnosisId: 'DataDiagnosisId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiagnosisId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

