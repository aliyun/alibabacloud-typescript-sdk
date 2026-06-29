// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferOwnershipForAllObjectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The transfer information.
   */
  privilegeTransferRecordShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      privilegeTransferRecordShrink: 'PrivilegeTransferRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      privilegeTransferRecordShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

