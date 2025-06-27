// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartNisInspectionTaskResponseBody extends $dara.Model {
  /**
   * @example
   * nir-9923e262c106461d86ad
   */
  inspectionReportId?: string;
  /**
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionReportId: 'InspectionReportId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionReportId: 'string',
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

