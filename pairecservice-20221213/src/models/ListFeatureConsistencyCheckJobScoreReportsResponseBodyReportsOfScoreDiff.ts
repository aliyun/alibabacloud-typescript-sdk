// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureConsistencyCheckJobScoreReportsResponseBodyReportsOfScoreDiff extends $dara.Model {
  /**
   * @example
   * 4
   */
  logItemId?: string;
  /**
   * @example
   * 323
   */
  logRequestId?: string;
  /**
   * @example
   * 3
   */
  logUserId?: string;
  /**
   * @example
   * 0.00000234
   */
  scoreDiff?: string;
  /**
   * @example
   * {}
   */
  scoreDiffDetail?: string;
  static names(): { [key: string]: string } {
    return {
      logItemId: 'LogItemId',
      logRequestId: 'LogRequestId',
      logUserId: 'LogUserId',
      scoreDiff: 'ScoreDiff',
      scoreDiffDetail: 'ScoreDiffDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logItemId: 'string',
      logRequestId: 'string',
      logUserId: 'string',
      scoreDiff: 'string',
      scoreDiffDetail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

