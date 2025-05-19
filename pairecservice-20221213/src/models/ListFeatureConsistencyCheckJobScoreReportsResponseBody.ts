// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFeatureConsistencyCheckJobScoreReportsResponseBodyReportsOfScoreDiff } from "./ListFeatureConsistencyCheckJobScoreReportsResponseBodyReportsOfScoreDiff";


export class ListFeatureConsistencyCheckJobScoreReportsResponseBody extends $dara.Model {
  /**
   * @example
   * http://*******
   */
  dataPath?: string;
  /**
   * @example
   * oss://********
   */
  ossPath?: string;
  reportsOfScoreDiff?: ListFeatureConsistencyCheckJobScoreReportsResponseBodyReportsOfScoreDiff[];
  /**
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

