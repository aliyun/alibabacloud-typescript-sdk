// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * approval-872b5e911b35****
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

