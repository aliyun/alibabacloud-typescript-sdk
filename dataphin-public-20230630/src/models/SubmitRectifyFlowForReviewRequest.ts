// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitRectifyFlowForReviewRequestSubmitCommand extends $dara.Model {
  /**
   * @remarks
   * The description of the rectification result. This parameter is required and can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the rectification process. Submission is allowed only when the process is in the rectifying or re-rectifying state.
   * 
   * This parameter is required.
   * 
   * @example
   * 358710058950
   */
  rectifyId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      rectifyId: 'RectifyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      rectifyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitRectifyFlowForReviewRequest extends $dara.Model {
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
   * The operator user ID.
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
  submitCommand?: SubmitRectifyFlowForReviewRequestSubmitCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      submitCommand: 'SubmitCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      submitCommand: SubmitRectifyFlowForReviewRequestSubmitCommand,
    };
  }

  validate() {
    if(this.submitCommand && typeof (this.submitCommand as any).validate === 'function') {
      (this.submitCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

