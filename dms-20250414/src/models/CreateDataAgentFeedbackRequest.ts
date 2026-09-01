// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentFeedbackRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
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
  /**
   * @example
   * 56kv1pvl9uvt9**********bb
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
      feedbackContent: 'FeedbackContent',
      feedbackType: 'FeedbackType',
      likeValue: 'LikeValue',
      sessionId: 'SessionId',
      targetId: 'TargetId',
      targetType: 'TargetType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DMSUnit: 'string',
      feedbackContent: 'string',
      feedbackType: 'string',
      likeValue: 'number',
      sessionId: 'string',
      targetId: 'string',
      targetType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

