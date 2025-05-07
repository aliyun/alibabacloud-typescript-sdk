// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultToReviewResponseBodyDataDialogues } from "./GetResultToReviewResponseBodyDataDialogues";
import { GetResultToReviewResponseBodyDataHitRuleReviewInfoList } from "./GetResultToReviewResponseBodyDataHitRuleReviewInfoList";
import { GetResultToReviewResponseBodyDataManualScoreInfoList } from "./GetResultToReviewResponseBodyDataManualScoreInfoList";
import { GetResultToReviewResponseBodyDataReviewHistoryList } from "./GetResultToReviewResponseBodyDataReviewHistoryList";
import { GetResultToReviewResponseBodyDataReviewTypeIdList } from "./GetResultToReviewResponseBodyDataReviewTypeIdList";


export class GetResultToReviewResponseBodyData extends $dara.Model {
  /**
   * @example
   * https
   */
  audioScheme?: string;
  /**
   * @example
   * sca-ccc-test.oss-cn-beijing.aliyuncs.com/xxxxx
   */
  audioURL?: string;
  /**
   * @example
   * xxx
   */
  comments?: string;
  dialogues?: GetResultToReviewResponseBodyDataDialogues;
  /**
   * @example
   * e790e6c919d84b82b64ee*****
   */
  fileId?: string;
  /**
   * @example
   * xxx.wav
   */
  fileMergeName?: string;
  hitRuleReviewInfoList?: GetResultToReviewResponseBodyDataHitRuleReviewInfoList;
  manualScoreInfoList?: GetResultToReviewResponseBodyDataManualScoreInfoList;
  reviewHistoryList?: GetResultToReviewResponseBodyDataReviewHistoryList;
  reviewTypeIdList?: GetResultToReviewResponseBodyDataReviewTypeIdList;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 99
   */
  totalScore?: number;
  /**
   * @example
   * 6fa76916-3ce6-45d8-ac64-01b7f31***
   */
  vid?: string;
  static names(): { [key: string]: string } {
    return {
      audioScheme: 'AudioScheme',
      audioURL: 'AudioURL',
      comments: 'Comments',
      dialogues: 'Dialogues',
      fileId: 'FileId',
      fileMergeName: 'FileMergeName',
      hitRuleReviewInfoList: 'HitRuleReviewInfoList',
      manualScoreInfoList: 'ManualScoreInfoList',
      reviewHistoryList: 'ReviewHistoryList',
      reviewTypeIdList: 'ReviewTypeIdList',
      status: 'Status',
      totalScore: 'TotalScore',
      vid: 'Vid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioScheme: 'string',
      audioURL: 'string',
      comments: 'string',
      dialogues: GetResultToReviewResponseBodyDataDialogues,
      fileId: 'string',
      fileMergeName: 'string',
      hitRuleReviewInfoList: GetResultToReviewResponseBodyDataHitRuleReviewInfoList,
      manualScoreInfoList: GetResultToReviewResponseBodyDataManualScoreInfoList,
      reviewHistoryList: GetResultToReviewResponseBodyDataReviewHistoryList,
      reviewTypeIdList: GetResultToReviewResponseBodyDataReviewTypeIdList,
      status: 'number',
      totalScore: 'number',
      vid: 'string',
    };
  }

  validate() {
    if(this.dialogues && typeof (this.dialogues as any).validate === 'function') {
      (this.dialogues as any).validate();
    }
    if(this.hitRuleReviewInfoList && typeof (this.hitRuleReviewInfoList as any).validate === 'function') {
      (this.hitRuleReviewInfoList as any).validate();
    }
    if(this.manualScoreInfoList && typeof (this.manualScoreInfoList as any).validate === 'function') {
      (this.manualScoreInfoList as any).validate();
    }
    if(this.reviewHistoryList && typeof (this.reviewHistoryList as any).validate === 'function') {
      (this.reviewHistoryList as any).validate();
    }
    if(this.reviewTypeIdList && typeof (this.reviewTypeIdList as any).validate === 'function') {
      (this.reviewTypeIdList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

