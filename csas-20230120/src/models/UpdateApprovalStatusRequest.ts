// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApprovalStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The approval instance ID. You can obtain this value from the following operations:
   * - [ListApprovals](~~ListApprovals~~): Lists approval instances.
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
   * The approval instance status. Valid values:
   * - **Approved**: Approved.
   * - **Rejected**: Rejected.
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

