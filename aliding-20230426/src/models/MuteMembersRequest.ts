// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MuteMembersRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
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

export class MuteMembersRequest extends $dara.Model {
  tenantContext?: MuteMembersRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["012345"]
   */
  userIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 607452e01401526ee39609e1
   */
  conferenceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mute
   */
  muteAction?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      userIds: 'UserIds',
      conferenceId: 'conferenceId',
      muteAction: 'muteAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: MuteMembersRequestTenantContext,
      userIds: { 'type': 'array', 'itemType': 'string' },
      conferenceId: 'string',
      muteAction: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

