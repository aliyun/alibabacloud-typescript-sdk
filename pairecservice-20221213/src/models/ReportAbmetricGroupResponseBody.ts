// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExperimentReportValue } from "./ExperimentReportValue";


export class ReportABMetricGroupResponseBody extends $dara.Model {
  experimentReport?: { [key: string]: ExperimentReportValue };
  groupDimension?: string[];
  /**
   * @example
   * 59CE7EC6-F268-5D71-9215-32922CC50D72
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentReport: 'ExperimentReport',
      groupDimension: 'GroupDimension',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentReport: { 'type': 'map', 'keyType': 'string', 'valueType': ExperimentReportValue },
      groupDimension: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.experimentReport) {
      $dara.Model.validateMap(this.experimentReport);
    }
    if(Array.isArray(this.groupDimension)) {
      $dara.Model.validateArray(this.groupDimension);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

