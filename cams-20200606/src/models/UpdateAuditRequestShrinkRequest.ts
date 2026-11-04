// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuditRequestShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Viber audit items.
   * 
   * This parameter is required.
   */
  auditRecordShrink?: string;
  /**
   * @remarks
   * The audit result.
   * 
   * @example
   * unAudit
   */
  auditResult?: string;
  /**
   * @remarks
   * The space ID or instance ID of the ISV sub-customer. This is the channel ID. You can view it on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-8pi**urn5s
   */
  custSpaceId?: string;
  /**
   * @example
   * 1500111740532860
   */
  ownerId?: number;
  /**
   * @remarks
   * The request number to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 114624518**5956096
   */
  requestNo?: string;
  /**
   * @example
   * user1@example.com\"
   */
  resourceOwnerAccount?: string;
  /**
   * @example
   * 1577495724967111
   */
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

