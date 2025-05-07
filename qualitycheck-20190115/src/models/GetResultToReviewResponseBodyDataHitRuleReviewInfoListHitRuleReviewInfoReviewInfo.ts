// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo extends $dara.Model {
  /**
   * @example
   * 013c68142fec4f0899fa6ee0exxx
   */
  hitId?: string;
  /**
   * @example
   * 1
   */
  reviewResult?: number;
  /**
   * @example
   * 2019-10-12 17:06:00
   */
  reviewTime?: string;
  /**
   * @example
   * 123
   */
  reviewer?: string;
  /**
   * @example
   * 451
   */
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      hitId: 'HitId',
      reviewResult: 'ReviewResult',
      reviewTime: 'ReviewTime',
      reviewer: 'Reviewer',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitId: 'string',
      reviewResult: 'number',
      reviewTime: 'string',
      reviewer: 'string',
      rid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

