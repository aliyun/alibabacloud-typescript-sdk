// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorReportComponentSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Score.
   * 
   * @example
   * 88
   */
  score?: number;
  /**
   * @remarks
   * Optimization suggestions.
   */
  suggestion?: string;
  /**
   * @remarks
   * The summary of the report.
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      suggestion: 'Suggestion',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      suggestion: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDoctorReportComponentSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the report.
   */
  data?: GetDoctorReportComponentSummaryResponseBodyData;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorReportComponentSummaryResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

