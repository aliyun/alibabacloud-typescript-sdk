// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvalidateApprovalRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the approval instance to be immediately invalidated. You can obtain the ID by calling the ListApprovals operation. You can specify only one approval instance ID under the current Alibaba Cloud account at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * approval-6b5188a28634****
   */
  approvalId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalId: 'ApprovalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

