// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveProcessInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The approval action. Valid values:
   * 
   * - Agree: approves the request.
   * 
   * - Deny: rejects the request.
   * 
   * This parameter is required.
   * 
   * @example
   * Agree
   */
  approvalAction?: string;
  /**
   * @remarks
   * The approval comment.
   * 
   * This parameter is required.
   * 
   * @example
   * Approve authorization
   */
  approvalComment?: string;
  /**
   * @remarks
   * The idempotency token. We recommend that you use a UUID.
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9*****
   */
  clientToken?: string;
  /**
   * @remarks
   * The modified authorization expiration time. The value is a millisecond-level timestamp.
   * 
   * @example
   * 1782541464000
   */
  newExpiration?: number;
  /**
   * @remarks
   * The flow instance ID. Both new and legacy Security Center approval orders are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 332066440109224007
   */
  processInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalAction: 'ApprovalAction',
      approvalComment: 'ApprovalComment',
      clientToken: 'ClientToken',
      newExpiration: 'NewExpiration',
      processInstanceId: 'ProcessInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalAction: 'string',
      approvalComment: 'string',
      clientToken: 'string',
      newExpiration: 'number',
      processInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

