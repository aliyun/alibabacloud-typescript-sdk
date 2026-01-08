// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddAddressRecoverSuspendRequestAuditRecord extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  applyReason?: string;
  messageDestinationCountry?: string[];
  messageDestinationInternationalCountry?: string[];
  /**
   * @example
   * 示例值示例值
   */
  recoveryDate?: string;
  /**
   * @example
   * 示例值示例值
   */
  suspensionDate?: string;
  static names(): { [key: string]: string } {
    return {
      applyReason: 'ApplyReason',
      messageDestinationCountry: 'MessageDestinationCountry',
      messageDestinationInternationalCountry: 'MessageDestinationInternationalCountry',
      recoveryDate: 'RecoveryDate',
      suspensionDate: 'SuspensionDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyReason: 'string',
      messageDestinationCountry: { 'type': 'array', 'itemType': 'string' },
      messageDestinationInternationalCountry: { 'type': 'array', 'itemType': 'string' },
      recoveryDate: 'string',
      suspensionDate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messageDestinationCountry)) {
      $dara.Model.validateArray(this.messageDestinationCountry);
    }
    if(Array.isArray(this.messageDestinationInternationalCountry)) {
      $dara.Model.validateArray(this.messageDestinationInternationalCountry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAddressRecoverSuspendRequest extends $dara.Model {
  auditRecord?: AddAddressRecoverSuspendRequestAuditRecord;
  /**
   * @example
   * 示例值示例值示例值
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @example
   * 示例值
   */
  requestType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      auditRecord: 'AuditRecord',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      requestType: 'RequestType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRecord: AddAddressRecoverSuspendRequestAuditRecord,
      custSpaceId: 'string',
      ownerId: 'number',
      requestType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.auditRecord && typeof (this.auditRecord as any).validate === 'function') {
      (this.auditRecord as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

