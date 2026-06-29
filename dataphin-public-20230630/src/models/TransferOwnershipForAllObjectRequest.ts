// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferOwnershipForAllObjectRequestPrivilegeTransferRecord extends $dara.Model {
  /**
   * @remarks
   * The user ID of the new owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 30000002
   */
  newOwner?: string;
  /**
   * @remarks
   * The user ID of the original owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 30000001
   */
  oldOwner?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * comment
   */
  transferComment?: string;
  static names(): { [key: string]: string } {
    return {
      newOwner: 'NewOwner',
      oldOwner: 'OldOwner',
      transferComment: 'TransferComment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newOwner: 'string',
      oldOwner: 'string',
      transferComment: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferOwnershipForAllObjectRequest extends $dara.Model {
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
  privilegeTransferRecord?: TransferOwnershipForAllObjectRequestPrivilegeTransferRecord;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      privilegeTransferRecord: 'PrivilegeTransferRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      privilegeTransferRecord: TransferOwnershipForAllObjectRequestPrivilegeTransferRecord,
    };
  }

  validate() {
    if(this.privilegeTransferRecord && typeof (this.privilegeTransferRecord as any).validate === 'function') {
      (this.privilegeTransferRecord as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

