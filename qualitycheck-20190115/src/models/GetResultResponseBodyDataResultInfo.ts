// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultResponseBodyDataResultInfoAgent } from "./GetResultResponseBodyDataResultInfoAgent";
import { GetResultResponseBodyDataResultInfoAsrResult } from "./GetResultResponseBodyDataResultInfoAsrResult";
import { GetResultResponseBodyDataResultInfoHitResult } from "./GetResultResponseBodyDataResultInfoHitResult";
import { GetResultResponseBodyDataResultInfoHitScore } from "./GetResultResponseBodyDataResultInfoHitScore";
import { GetResultResponseBodyDataResultInfoRecording } from "./GetResultResponseBodyDataResultInfoRecording";
import { GetResultResponseBodyDataResultInfoReviewHistoryList } from "./GetResultResponseBodyDataResultInfoReviewHistoryList";
import { GetResultResponseBodyDataResultInfoReviewTypeIdList } from "./GetResultResponseBodyDataResultInfoReviewTypeIdList";
import { GetResultResponseBodyDataResultInfoSchemeIdList } from "./GetResultResponseBodyDataResultInfoSchemeIdList";
import { GetResultResponseBodyDataResultInfoSchemeNameList } from "./GetResultResponseBodyDataResultInfoSchemeNameList";


export class GetResultResponseBodyDataResultInfo extends $dara.Model {
  agent?: GetResultResponseBodyDataResultInfoAgent;
  asrResult?: GetResultResponseBodyDataResultInfoAsrResult;
  /**
   * @example
   * 2021-03-02T14:37Z
   */
  assignmentTime?: string;
  /**
   * @example
   * xx
   */
  comments?: string;
  /**
   * @example
   * 2019-07-24T19:31Z
   */
  createTime?: string;
  /**
   * @example
   * 1602743090
   */
  createTimeLong?: string;
  /**
   * @example
   * xxx
   */
  errorMessage?: string;
  hitResult?: GetResultResponseBodyDataResultInfoHitResult;
  hitScore?: GetResultResponseBodyDataResultInfoHitScore;
  /**
   * @example
   * 4498420@a_z@93EAADF1-01D3-44BD-8AC9-F57F447EFCE8_1614*****
   */
  lastDataId?: string;
  recording?: GetResultResponseBodyDataResultInfoRecording;
  /**
   * @example
   * XXX
   */
  resolver?: string;
  reviewHistoryList?: GetResultResponseBodyDataResultInfoReviewHistoryList;
  /**
   * @example
   * 0
   */
  reviewResult?: number;
  /**
   * @example
   * 1
   */
  reviewStatus?: number;
  /**
   * @example
   * 2019-07-24T19:31Z
   */
  reviewTime?: string;
  /**
   * @example
   * 1602743090
   */
  reviewTimeLong?: string;
  /**
   * @example
   * 1
   */
  reviewType?: number;
  reviewTypeIdList?: GetResultResponseBodyDataResultInfoReviewTypeIdList;
  /**
   * @example
   * xxx
   */
  reviewer?: string;
  schemeIdList?: GetResultResponseBodyDataResultInfoSchemeIdList;
  schemeNameList?: GetResultResponseBodyDataResultInfoSchemeNameList;
  /**
   * @example
   * 100
   */
  score?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * A6BEC8D-9A5B-4BE5-8432-4F635E***
   */
  taskId?: string;
  /**
   * @example
   * test
   */
  taskName?: string;
  vid?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      asrResult: 'AsrResult',
      assignmentTime: 'AssignmentTime',
      comments: 'Comments',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      errorMessage: 'ErrorMessage',
      hitResult: 'HitResult',
      hitScore: 'HitScore',
      lastDataId: 'LastDataId',
      recording: 'Recording',
      resolver: 'Resolver',
      reviewHistoryList: 'ReviewHistoryList',
      reviewResult: 'ReviewResult',
      reviewStatus: 'ReviewStatus',
      reviewTime: 'ReviewTime',
      reviewTimeLong: 'ReviewTimeLong',
      reviewType: 'ReviewType',
      reviewTypeIdList: 'ReviewTypeIdList',
      reviewer: 'Reviewer',
      schemeIdList: 'SchemeIdList',
      schemeNameList: 'SchemeNameList',
      score: 'Score',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      vid: 'Vid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: GetResultResponseBodyDataResultInfoAgent,
      asrResult: GetResultResponseBodyDataResultInfoAsrResult,
      assignmentTime: 'string',
      comments: 'string',
      createTime: 'string',
      createTimeLong: 'string',
      errorMessage: 'string',
      hitResult: GetResultResponseBodyDataResultInfoHitResult,
      hitScore: GetResultResponseBodyDataResultInfoHitScore,
      lastDataId: 'string',
      recording: GetResultResponseBodyDataResultInfoRecording,
      resolver: 'string',
      reviewHistoryList: GetResultResponseBodyDataResultInfoReviewHistoryList,
      reviewResult: 'number',
      reviewStatus: 'number',
      reviewTime: 'string',
      reviewTimeLong: 'string',
      reviewType: 'number',
      reviewTypeIdList: GetResultResponseBodyDataResultInfoReviewTypeIdList,
      reviewer: 'string',
      schemeIdList: GetResultResponseBodyDataResultInfoSchemeIdList,
      schemeNameList: GetResultResponseBodyDataResultInfoSchemeNameList,
      score: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
      vid: 'string',
    };
  }

  validate() {
    if(this.agent && typeof (this.agent as any).validate === 'function') {
      (this.agent as any).validate();
    }
    if(this.asrResult && typeof (this.asrResult as any).validate === 'function') {
      (this.asrResult as any).validate();
    }
    if(this.hitResult && typeof (this.hitResult as any).validate === 'function') {
      (this.hitResult as any).validate();
    }
    if(this.hitScore && typeof (this.hitScore as any).validate === 'function') {
      (this.hitScore as any).validate();
    }
    if(this.recording && typeof (this.recording as any).validate === 'function') {
      (this.recording as any).validate();
    }
    if(this.reviewHistoryList && typeof (this.reviewHistoryList as any).validate === 'function') {
      (this.reviewHistoryList as any).validate();
    }
    if(this.reviewTypeIdList && typeof (this.reviewTypeIdList as any).validate === 'function') {
      (this.reviewTypeIdList as any).validate();
    }
    if(this.schemeIdList && typeof (this.schemeIdList as any).validate === 'function') {
      (this.schemeIdList as any).validate();
    }
    if(this.schemeNameList && typeof (this.schemeNameList as any).validate === 'function') {
      (this.schemeNameList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

