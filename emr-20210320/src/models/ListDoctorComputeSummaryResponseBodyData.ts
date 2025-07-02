// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDoctorComputeSummaryResponseBodyDataAnalysis } from "./ListDoctorComputeSummaryResponseBodyDataAnalysis";
import { ListDoctorComputeSummaryResponseBodyDataMetrics } from "./ListDoctorComputeSummaryResponseBodyDataMetrics";


export class ListDoctorComputeSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The resource analysis results.
   */
  analysis?: ListDoctorComputeSummaryResponseBodyDataAnalysis;
  /**
   * @remarks
   * The name of the resource whose details are obtained based on the value of ComponentTypes. For example, if the value of ComponentTypes is Queue, the value of this parameter is a queue, such as DW.
   * 
   * @example
   * DW
   */
  componentName?: string;
  /**
   * @remarks
   * The metric information.
   */
  metrics?: ListDoctorComputeSummaryResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      componentName: 'ComponentName',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: ListDoctorComputeSummaryResponseBodyDataAnalysis,
      componentName: 'string',
      metrics: ListDoctorComputeSummaryResponseBodyDataMetrics,
    };
  }

  validate() {
    if(this.analysis && typeof (this.analysis as any).validate === 'function') {
      (this.analysis as any).validate();
    }
    if(this.metrics && typeof (this.metrics as any).validate === 'function') {
      (this.metrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

