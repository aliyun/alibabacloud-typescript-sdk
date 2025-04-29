// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnosticReportsResponseBodyReportsReportIssuesIssue } from "./DescribeDiagnosticReportsResponseBodyReportsReportIssuesIssue";


export class DescribeDiagnosticReportsResponseBodyReportsReportIssues extends $dara.Model {
  issue?: DescribeDiagnosticReportsResponseBodyReportsReportIssuesIssue[];
  static names(): { [key: string]: string } {
    return {
      issue: 'Issue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issue: { 'type': 'array', 'itemType': DescribeDiagnosticReportsResponseBodyReportsReportIssuesIssue },
    };
  }

  validate() {
    if(Array.isArray(this.issue)) {
      $dara.Model.validateArray(this.issue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

