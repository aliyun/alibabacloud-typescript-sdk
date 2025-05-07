// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UploadDataSyncResponseBodyDataResultInfoHandScoreIdList } from "./UploadDataSyncResponseBodyDataResultInfoHandScoreIdList";
import { UploadDataSyncResponseBodyDataResultInfoRules } from "./UploadDataSyncResponseBodyDataResultInfoRules";


export class UploadDataSyncResponseBodyDataResultInfo extends $dara.Model {
  handScoreIdList?: UploadDataSyncResponseBodyDataResultInfoHandScoreIdList;
  rules?: UploadDataSyncResponseBodyDataResultInfoRules;
  /**
   * @example
   * 100
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      handScoreIdList: 'HandScoreIdList',
      rules: 'Rules',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handScoreIdList: UploadDataSyncResponseBodyDataResultInfoHandScoreIdList,
      rules: UploadDataSyncResponseBodyDataResultInfoRules,
      score: 'number',
    };
  }

  validate() {
    if(this.handScoreIdList && typeof (this.handScoreIdList as any).validate === 'function') {
      (this.handScoreIdList as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

