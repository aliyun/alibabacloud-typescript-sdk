// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveProcessInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Agree
   */
  approvalAction?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  approvalComment?: string;
  /**
   * @example
   * 1AFAE64E-D1BE-432B-A9*****
   */
  clientToken?: string;
  /**
   * @remarks
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
      processInstanceId: 'ProcessInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalAction: 'string',
      approvalComment: 'string',
      clientToken: 'string',
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

