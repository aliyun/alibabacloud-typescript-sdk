// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApprovalStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the approval instance. You can obtain the value from the following operations:
   * - [ListApprovals](~~ListApprovals~~): Queries a list of approval instances.
   * - [GetApproval](~~GetApproval~~): Queries the details of an approval instance.
   * 
   * This parameter is required.
   * 
   * @example
   * approval-872b5e911b35****
   */
  approvalId?: string;
  /**
   * @remarks
   * The status of the approval instance. Valid values:
   * - **Approved**: Approved.
   * - **Rejected**: deny.
   * 
   * This parameter is required.
   * 
   * @example
   * Approved
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      approvalId: 'ApprovalId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalId: 'string',
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

