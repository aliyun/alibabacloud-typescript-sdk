// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResultIssuesIssue } from "./DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResultIssuesIssue";


export class DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResultIssues extends $dara.Model {
  issue?: DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResultIssuesIssue[];
  static names(): { [key: string]: string } {
    return {
      issue: 'Issue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issue: { 'type': 'array', 'itemType': DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResultIssuesIssue },
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

