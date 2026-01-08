// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAddressRecoverSuspendShrinkRequest extends $dara.Model {
  auditRecordShrink?: string;
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

