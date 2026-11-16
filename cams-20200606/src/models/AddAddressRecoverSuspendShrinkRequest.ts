// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAddressRecoverSuspendShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The audit record.
   */
  auditRecordShrink?: string;
  /**
   * @remarks
   * The customer space ID.
   * 
   * @example
   * Example value example value example value
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The request type.
   * 
   * @example
   * Example value
   */
  requestType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      auditRecordShrink: 'AuditRecord',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      requestType: 'RequestType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRecordShrink: 'string',
      custSpaceId: 'string',
      ownerId: 'number',
      requestType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

