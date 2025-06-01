// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachPolicy2ApprovalProcessRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ladp-27a4fedf5e73****
   */
  policyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PeripheralBlock
   */
  policyType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * approval-process-2677fcf063f5****
   */
  processId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyType: 'PolicyType',
      processId: 'ProcessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      policyType: 'string',
      processId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

