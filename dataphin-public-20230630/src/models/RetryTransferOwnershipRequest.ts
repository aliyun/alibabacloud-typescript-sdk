// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryTransferOwnershipRequestPrivilegeTransferRecord extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30000001
   */
  newOwner?: string;
  /**
   * @example
   * comment
   */
  transferComment?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      newOwner: 'NewOwner',
      transferComment: 'TransferComment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      newOwner: 'string',
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

export class RetryTransferOwnershipRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  privilegeTransferRecord?: RetryTransferOwnershipRequestPrivilegeTransferRecord;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      privilegeTransferRecord: 'PrivilegeTransferRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      privilegeTransferRecord: RetryTransferOwnershipRequestPrivilegeTransferRecord,
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

