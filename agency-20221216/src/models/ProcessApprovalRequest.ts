// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProcessApprovalRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application form.
   * 
   * This parameter is required.
   * 
   * @example
   * d54ca949-9b88-4514-add3-c6029c4027f4
   */
  applicationSheetId?: string;
  /**
   * @remarks
   * The approval action. Valid values:
   * - Approve: approved.
   * - Reject: rejected.
   * 
   * This parameter is required.
   * 
   * @example
   * Approve
   */
  approvalAction?: string;
  /**
   * @remarks
   * The approval comments.
   * 
   * This parameter is required.
   * 
   * @example
   * 同意
   */
  approvalComments?: string;
  static names(): { [key: string]: string } {
    return {
      applicationSheetId: 'ApplicationSheetId',
      approvalAction: 'ApprovalAction',
      approvalComments: 'ApprovalComments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationSheetId: 'string',
      approvalAction: 'string',
      approvalComments: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

