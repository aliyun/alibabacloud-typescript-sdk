// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDoctorReportsResponseBodyDataSummaryReport } from "./ListDoctorReportsResponseBodyDataSummaryReport";


export class ListDoctorReportsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The component types.
   * 
   * Valid values:
   * 
   * *   compute
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   hive
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   hdfs
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   yarn
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   oss
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   hbase
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * null
   */
  componentTypes?: string[];
  /**
   * @remarks
   * The date on which the report was generated.
   * 
   * @example
   * 2023-06-29
   */
  dateTime?: string;
  /**
   * @remarks
   * The summary of the report.
   */
  summaryReport?: ListDoctorReportsResponseBodyDataSummaryReport;
  static names(): { [key: string]: string } {
    return {
      componentTypes: 'ComponentTypes',
      dateTime: 'DateTime',
      summaryReport: 'SummaryReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentTypes: { 'type': 'array', 'itemType': 'string' },
      dateTime: 'string',
      summaryReport: ListDoctorReportsResponseBodyDataSummaryReport,
    };
  }

  validate() {
    if(Array.isArray(this.componentTypes)) {
      $dara.Model.validateArray(this.componentTypes);
    }
    if(this.summaryReport && typeof (this.summaryReport as any).validate === 'function') {
      (this.summaryReport as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

