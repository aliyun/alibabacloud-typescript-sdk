// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultResponseBodyDataResultInfoHitResultHitResultConditions } from "./GetResultResponseBodyDataResultInfoHitResultHitResultConditions";
import { GetResultResponseBodyDataResultInfoHitResultHitResultHits } from "./GetResultResponseBodyDataResultInfoHitResultHitResultHits";


export class GetResultResponseBodyDataResultInfoHitResultHitResult extends $dara.Model {
  conditions?: GetResultResponseBodyDataResultInfoHitResultHitResultConditions;
  hits?: GetResultResponseBodyDataResultInfoHitResultHitResultHits;
  name?: string;
  /**
   * @example
   * 0
   */
  reviewResult?: number;
  /**
   * @example
   * 1276
   */
  rid?: string;
  /**
   * @example
   * 123xx
   */
  schemeId?: number;
  /**
   * @example
   * 11xx
   */
  schemeVersion?: number;
  score?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      hits: 'Hits',
      name: 'Name',
      reviewResult: 'ReviewResult',
      rid: 'Rid',
      schemeId: 'SchemeId',
      schemeVersion: 'SchemeVersion',
      score: 'Score',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: GetResultResponseBodyDataResultInfoHitResultHitResultConditions,
      hits: GetResultResponseBodyDataResultInfoHitResultHitResultHits,
      name: 'string',
      reviewResult: 'number',
      rid: 'string',
      schemeId: 'number',
      schemeVersion: 'number',
      score: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.conditions && typeof (this.conditions as any).validate === 'function') {
      (this.conditions as any).validate();
    }
    if(this.hits && typeof (this.hits as any).validate === 'function') {
      (this.hits as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

