// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachTaskSessionReportResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 2024-11-08 09:33:21
   */
  endTime?: string;
  evaluationRating?: string;
  /**
   * @example
   * {}
   */
  evaluationResult?: string;
  feedback?: boolean;
  /**
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
  requestId?: string;
  scriptName?: string;
  /**
   * @example
   * 2024-10-11 09:58:01
   */
  startTime?: string;
  status?: string;
  /**
   * @example
   * 1276673855116835
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      endTime: 'endTime',
      evaluationRating: 'evaluationRating',
      evaluationResult: 'evaluationResult',
      feedback: 'feedback',
      requestId: 'requestId',
      scriptName: 'scriptName',
      startTime: 'startTime',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      endTime: 'string',
      evaluationRating: 'string',
      evaluationResult: 'string',
      feedback: 'boolean',
      requestId: 'string',
      scriptName: 'string',
      startTime: 'string',
      status: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

