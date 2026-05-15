// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MuteAllRequestTenantContext extends $dara.Model {
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

export class MuteAllRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  forceMute?: boolean;
  tenantContext?: MuteAllRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
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
      forceMute: 'ForceMute',
      tenantContext: 'TenantContext',
      conferenceId: 'conferenceId',
      muteAction: 'muteAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceMute: 'boolean',
      tenantContext: MuteAllRequestTenantContext,
      conferenceId: 'string',
      muteAction: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

