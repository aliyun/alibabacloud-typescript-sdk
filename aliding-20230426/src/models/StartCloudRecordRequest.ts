// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCloudRecordRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 1
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

export class StartCloudRecordRequest extends $dara.Model {
  /**
   * @example
   * speech
   */
  mode?: string;
  /**
   * @example
   * relative_right
   */
  smallWindowPosition?: string;
  tenantContext?: StartCloudRecordRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61289fxxx
   */
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      smallWindowPosition: 'SmallWindowPosition',
      tenantContext: 'TenantContext',
      conferenceId: 'conferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      smallWindowPosition: 'string',
      tenantContext: StartCloudRecordRequestTenantContext,
      conferenceId: 'string',
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

