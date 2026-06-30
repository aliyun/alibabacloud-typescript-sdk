// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantHonorShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  expirationTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  grantReason?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  granterName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  honorId?: string;
  noticeAnnouncer?: boolean;
  noticeSingle?: boolean;
  openConversationIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orgId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  receiverUserIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  senderUserId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      expirationTime: 'expirationTime',
      grantReason: 'grantReason',
      granterName: 'granterName',
      honorId: 'honorId',
      noticeAnnouncer: 'noticeAnnouncer',
      noticeSingle: 'noticeSingle',
      openConversationIdsShrink: 'openConversationIds',
      orgId: 'orgId',
      receiverUserIdsShrink: 'receiverUserIds',
      senderUserId: 'senderUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      expirationTime: 'number',
      grantReason: 'string',
      granterName: 'string',
      honorId: 'string',
      noticeAnnouncer: 'boolean',
      noticeSingle: 'boolean',
      openConversationIdsShrink: 'string',
      orgId: 'number',
      receiverUserIdsShrink: 'string',
      senderUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

