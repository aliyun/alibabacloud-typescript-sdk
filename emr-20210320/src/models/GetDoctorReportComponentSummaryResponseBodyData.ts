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

