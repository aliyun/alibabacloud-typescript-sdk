// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartMinutesRequestTenantContext extends $dara.Model {
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

export class StartMinutesRequest extends $dara.Model {
  tenantContext?: StartMinutesRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61289fxxx
   */
  conferenceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 012345
   */
  ownerUserId?: string;
  /**
   * @example
   * false
   */
  recordAudio?: boolean;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      conferenceId: 'conferenceId',
      ownerUserId: 'ownerUserId',
      recordAudio: 'recordAudio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: StartMinutesRequestTenantContext,
      conferenceId: 'string',
      ownerUserId: 'string',
      recordAudio: 'boolean',
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

