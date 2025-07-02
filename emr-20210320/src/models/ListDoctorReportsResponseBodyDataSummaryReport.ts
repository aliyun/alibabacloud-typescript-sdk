// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorReportsResponseBodyDataSummaryReport extends $dara.Model {
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 88
   */
  score?: number;
  /**
   * @remarks
   * The optimization suggestion.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The summary of the report.
   * 
   * @example
   * eastbuy-mse-plugin-auth
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

