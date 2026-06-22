// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAuditViberOpenShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The audit record.
   */
  auditRecordShrink?: string;
  /**
   * @remarks
   * The audit result.
   * 
   * @example
   * example
   */
  auditResult?: string;
  /**
   * @remarks
   * The Space ID of the ISV sub-customer.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  custSpaceId?: string;
  /**
   * @example
   * 1651322271196729
   */
  ownerId?: number;
  /**
   * @example
   * testuser@testdomain.co
   */
  resourceOwnerAccount?: string;
  /**
   * @example
   * 1754580903499898
   */
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      auditRecordShrink: 'AuditRecord',
      auditResult: 'AuditResult',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRecordShrink: 'string',
      auditResult: 'string',
      custSpaceId: 'string',
      ownerId: 'number',
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

