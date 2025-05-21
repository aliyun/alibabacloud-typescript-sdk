// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachAssessmentPointResponseBodyAnswerListAnswerValuesKeywordValues extends $dara.Model {
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * 50
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

