// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawSkillAssessmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The assessment result.
   * 
   * @example
   * {"zhReportContent":"# Skill Security Assessment Report\\n\\n> **Risk level:** ...}
   */
  assessmentResult?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD3FA5F3-FAF3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assessmentResult: 'AssessmentResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assessmentResult: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

