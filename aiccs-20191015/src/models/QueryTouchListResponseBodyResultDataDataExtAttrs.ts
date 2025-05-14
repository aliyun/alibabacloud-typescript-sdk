// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTouchListResponseBodyResultDataDataExtAttrs extends $dara.Model {
  /**
   * @example
   * 187****0000
   */
  ani?: string;
  /**
   * @example
   * 05712688****
   */
  dnis?: string;
  /**
   * @example
   * 2
   */
  evaluationLevel?: number;
  /**
   * @example
   * 1
   */
  evaluationScore?: number;
  /**
   * @example
   * 0
   */
  evaluationSolution?: number;
  /**
   * @example
   * 1
   */
  evaluationStatus?: number;
  /**
   * @example
   * 1
   */
  onlineJoinRespInterval?: number;
  /**
   * @example
   * 0
   */
  onlineSessionSource?: number;
  /**
   * @example
   * 05712688****
   */
  outCallRouteNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ani: 'Ani',
      dnis: 'Dnis',
      evaluationLevel: 'EvaluationLevel',
      evaluationScore: 'EvaluationScore',
      evaluationSolution: 'EvaluationSolution',
      evaluationStatus: 'EvaluationStatus',
      onlineJoinRespInterval: 'OnlineJoinRespInterval',
      onlineSessionSource: 'OnlineSessionSource',
      outCallRouteNumber: 'OutCallRouteNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ani: 'string',
      dnis: 'string',
      evaluationLevel: 'number',
      evaluationScore: 'number',
      evaluationSolution: 'number',
      evaluationStatus: 'number',
      onlineJoinRespInterval: 'number',
      onlineSessionSource: 'number',
      outCallRouteNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

