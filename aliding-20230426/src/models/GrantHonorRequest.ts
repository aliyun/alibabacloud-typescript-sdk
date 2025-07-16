// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantHonorRequestTenantContext extends $dara.Model {
  /**
   * @example
   * null
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantHonorRequest extends $dara.Model {
  tenantContext?: GrantHonorRequestTenantContext;
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
  openConversationIds?: string[];
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
  receiverUserIds?: string[];
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
      tenantContext: 'TenantContext',
      expirationTime: 'expirationTime',
      grantReason: 'grantReason',
      granterName: 'granterName',
      honorId: 'honorId',
      noticeAnnouncer: 'noticeAnnouncer',
      noticeSingle: 'noticeSingle',
      openConversationIds: 'openConversationIds',
      orgId: 'orgId',
      receiverUserIds: 'receiverUserIds',
      senderUserId: 'senderUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: GrantHonorRequestTenantContext,
      expirationTime: 'number',
      grantReason: 'string',
      granterName: 'string',
      honorId: 'string',
      noticeAnnouncer: 'boolean',
      noticeSingle: 'boolean',
      openConversationIds: { 'type': 'array', 'itemType': 'string' },
      orgId: 'number',
      receiverUserIds: { 'type': 'array', 'itemType': 'string' },
      senderUserId: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(Array.isArray(this.openConversationIds)) {
      $dara.Model.validateArray(this.openConversationIds);
    }
    if(Array.isArray(this.receiverUserIds)) {
      $dara.Model.validateArray(this.receiverUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

