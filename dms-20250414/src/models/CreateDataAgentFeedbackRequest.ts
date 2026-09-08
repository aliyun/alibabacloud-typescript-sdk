// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentFeedbackRequest extends $dara.Model {
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The feedback content. You can directly enter the feedback content, or pass a JSON string for the issue report scenario as shown in the example. The feedback_type field corresponds to the issue type, user_feedback corresponds to the issue description, email corresponds to the contact email address, and is_authorized indicates whether to authorize log access for troubleshooting.
   * 
   * feedback_type issue types. Valid values:
   * 
   * - **ANALYSIS_RESULT_INACCURATE**: Inaccurate analysis result.
   * - **RUNTIME_ERROR**: Runtime error.
   * - **REPORT_EXCEPTION**: Report exception.
   * - **SLOW_RESPONSE**: Slow response.
   * - **PRODUCT_SUGGESTION**: Product suggestion.
   * - **OTHER**: Other.
   * 
   * @example
   * {"feedback_type":"PRODUCT_SUGGESTION","user_feedback": "test","email":"yourname@example.com","is_authorized":"Y"}
   */
  feedbackContent?: string;
  /**
   * @remarks
   * The feedback type. Valid values:
   * 
   * - **ISSUE_REPORT**: issue report.
   * - **CANCEL_CHAT**: task cancellation.
   * - **LIKE**: like.
   * - **DISLIKE**: dislike.
   * 
   * @example
   * ISSUE_REPORT
   */
  feedbackType?: string;
  /**
   * @remarks
   * The like value. This parameter is used only for like and dislike scenarios. Do not pass this parameter for other scenarios. Valid values:
   * 
   * - **1**: like.
   * - **-1**: dislike.
   * 
   * @example
   * 1
   */
  likeValue?: number;
  /**
   * @remarks
   * The agent session ID.
   * 
   * @example
   * h8r********4fch
   */
  sessionId?: string;
  /**
   * @remarks
   * The feedback target ID.
   * 
   * - For issue reports, use SessionId + underscore + random UUID.
   * - For other feedback types, pass the checkpoint of the current SSE message stream.
   * 
   * @example
   * h8r********4fch_sdesfews
   */
  targetId?: string;
  /**
   * @remarks
   * The feedback target. Valid values:
   * 
   * - **SESSION**: session (used for issue reports).
   * - **CHAT**: chat (used for task cancellation).
   * - **REPORT**: report.
   * - **PLAN**: execution plan.
   * 
   * @example
   * SESSION
   */
  targetType?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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

