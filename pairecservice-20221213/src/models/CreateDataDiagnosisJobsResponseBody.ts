// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataDiagnosisJobsResponseBody extends $dara.Model {
  dataDiagnosisJobIds?: string[];
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiagnosisJobIds: 'DataDiagnosisJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiagnosisJobIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDiagnosisJobIds)) {
      $dara.Model.validateArray(this.dataDiagnosisJobIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

