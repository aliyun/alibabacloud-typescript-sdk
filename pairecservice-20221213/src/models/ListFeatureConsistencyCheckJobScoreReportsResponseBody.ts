// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureConsistencyCheckJobScoreReportsResponseBodyReportsOfScoreDiff extends $dara.Model {
  /**
   * @remarks
   * The item ID.
   * 
   * @example
   * 4
   */
  logItemId?: string;
  /**
   * @remarks
   * The request ID recorded in the log.
   * 
   * @example
   * 323
   */
  logRequestId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 3
   */
  logUserId?: string;
  /**
   * @remarks
   * The score difference.
   * 
   * @example
   * 0.00000234
   */
  scoreDiff?: string;
  /**
   * @remarks
   * The score difference details.
   * 
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

export class ListFeatureConsistencyCheckJobScoreReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data path.
   * 
   * @example
   * http://*******
   */
  dataPath?: string;
  /**
   * @remarks
   * The OSS path.
   * 
   * @example
   * oss://********
   */
  ossPath?: string;
  /**
   * @remarks
   * A list of score difference reports.
   */
  reportsOfScoreDiff?: ListFeatureConsistencyCheckJobScoreReportsResponseBodyReportsOfScoreDiff[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F0AB6527-093F-5C44-B3BD-42C8C210C619
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPath: 'DataPath',
      ossPath: 'OssPath',
      reportsOfScoreDiff: 'ReportsOfScoreDiff',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPath: 'string',
      ossPath: 'string',
      reportsOfScoreDiff: { 'type': 'array', 'itemType': ListFeatureConsistencyCheckJobScoreReportsResponseBodyReportsOfScoreDiff },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reportsOfScoreDiff)) {
      $dara.Model.validateArray(this.reportsOfScoreDiff);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

