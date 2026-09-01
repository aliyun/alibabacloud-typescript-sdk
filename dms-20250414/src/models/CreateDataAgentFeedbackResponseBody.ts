// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentFeedbackResponseBodyData extends $dara.Model {
  /**
   * @example
   * {"feedback_type":"PRODUCT_SUGGESTION","user_feedback": "test","email":"yourname@example.com","is_authorized":"Y"}
   */
  feedbackContent?: string;
  /**
   * @example
   * ISSUE_REPORT
   */
  feedbackType?: string;
  /**
   * @example
   * 1
   */
  likeValue?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * h8r********4fch
   */
  sessionId?: string;
  /**
   * @example
   * h8r********4fch_sdesfews
   */
  targetId?: string;
  /**
   * @example
   * SESSION
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      feedbackContent: 'FeedbackContent',
      feedbackType: 'FeedbackType',
      likeValue: 'LikeValue',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedbackContent: 'string',
      feedbackType: 'string',
      likeValue: 'number',
      regionId: 'string',
      sessionId: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAgentFeedbackResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CreateDataAgentFeedbackResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Specified parameter Tid is not valid.
   */
  message?: string;
  /**
   * @example
   * 89a07eac-96ff-48be-983b-f22c55*****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateDataAgentFeedbackResponseBodyData,
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

