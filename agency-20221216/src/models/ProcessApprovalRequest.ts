// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProcessApprovalRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d54ca949-9b88-4514-add3-c6029c4027f4
   */
  applicationSheetId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Approve
   */
  approvalAction?: string;
  /**
   * @remarks
   * This parameter is required.
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

