// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReviewRectifyFlowRequestReviewCommand extends $dara.Model {
  /**
   * @remarks
   * The acceptance description. This parameter is optional and can contain up to 128 characters.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the rectification process. This operation is allowed only when the process is pending acceptance.
   * 
   * This parameter is required.
   * 
   * @example
   * 616543434760
   */
  rectifyId?: number;
  /**
   * @remarks
   * The acceptance result. Valid values: PASSED and REJECTED.
   * 
   * This parameter is required.
   * 
   * @example
   * PASSED
   */
  reviewResult?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      rectifyId: 'RectifyId',
      reviewResult: 'ReviewResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      rectifyId: 'number',
      reviewResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewRectifyFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The business request parameters.
   * 
   * This parameter is required.
   */
  reviewCommand?: ReviewRectifyFlowRequestReviewCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      reviewCommand: 'ReviewCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      reviewCommand: ReviewRectifyFlowRequestReviewCommand,
    };
  }

  validate() {
    if(this.reviewCommand && typeof (this.reviewCommand as any).validate === 'function') {
      (this.reviewCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

