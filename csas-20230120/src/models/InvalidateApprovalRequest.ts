// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvalidateApprovalRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the approval instance to immediately invalidate. You can call ListApprovals to query approval instance IDs. Only one approval instance ID under the current Alibaba Cloud account can be specified per request.
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

