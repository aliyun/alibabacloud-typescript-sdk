// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorApplicationsResponseBodyDataAnalysis extends $dara.Model {
  /**
   * @remarks
   * The score of the job.
   * 
   * @example
   * 23
   */
  score?: number;
  /**
   * @remarks
   * The suggestion on executing the job.
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

