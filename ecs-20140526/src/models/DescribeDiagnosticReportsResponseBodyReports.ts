// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnosticReportsResponseBodyReportsReport } from "./DescribeDiagnosticReportsResponseBodyReportsReport";


export class DescribeDiagnosticReportsResponseBodyReports extends $dara.Model {
  report?: DescribeDiagnosticReportsResponseBodyReportsReport[];
  static names(): { [key: string]: string } {
    return {
      report: 'Report',
    };
  }

  static types(): { [key: string]: any } {
    return {
      report: { 'type': 'array', 'itemType': DescribeDiagnosticReportsResponseBodyReportsReport },
    };
  }

  validate() {
    if(Array.isArray(this.report)) {
      $dara.Model.validateArray(this.report);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

