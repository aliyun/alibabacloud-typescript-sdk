// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAuditViberOpenShrinkRequest extends $dara.Model {
  auditRecordShrink?: string;
  /**
   * @example
   * 示例值
   */
  auditResult?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  custSpaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
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

