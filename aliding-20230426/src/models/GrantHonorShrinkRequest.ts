// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantHonorShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @example
   * null
   */
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
   * 
   * @example
   * 21659398
   */
  honorId?: string;
  /**
   * @example
   * false
   */
  noticeAnnouncer?: boolean;
  /**
   * @example
   * false
   */
  noticeSingle?: boolean;
  openConversationIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 345391052
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
   * 
   * @example
   * 363784
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

