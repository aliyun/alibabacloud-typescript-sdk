// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FeedbackReviewCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 符合规范
   */
  feedbackPbcAPI?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 符合规范
   */
  feedbackPbcInstruction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 符合规范
   */
  feedbackPbcSchema?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 服务安全
   */
  feedbackSecurity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 服务可运行
   */
  feedbackServiceAvailable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reviewId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * REVIEW_FAILED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      feedbackPbcAPI: 'feedbackPbcAPI',
      feedbackPbcInstruction: 'feedbackPbcInstruction',
      feedbackPbcSchema: 'feedbackPbcSchema',
      feedbackSecurity: 'feedbackSecurity',
      feedbackServiceAvailable: 'feedbackServiceAvailable',
      reviewId: 'reviewId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedbackPbcAPI: 'string',
      feedbackPbcInstruction: 'string',
      feedbackPbcSchema: 'string',
      feedbackSecurity: 'string',
      feedbackServiceAvailable: 'string',
      reviewId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

