// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuditRequestShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  auditRecordShrink?: string;
  /**
   * @example
   * unAudit
   */
  auditResult?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cams-8pi**urn5s
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 114624518**5956096
   */
  requestNo?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      auditRecordShrink: 'AuditRecord',
      auditResult: 'AuditResult',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      requestNo: 'RequestNo',
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
      requestNo: 'string',
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

