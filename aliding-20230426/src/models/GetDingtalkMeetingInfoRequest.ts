// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkMeetingInfoRequestTenantContext extends $dara.Model {
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

export class GetDingtalkMeetingInfoRequest extends $dara.Model {
  tenantContext?: GetDingtalkMeetingInfoRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61289fxxx
   */
  conferenceId?: string;
  /**
   * @example
   * 21001
   */
  orgId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      conferenceId: 'conferenceId',
      orgId: 'orgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: GetDingtalkMeetingInfoRequestTenantContext,
      conferenceId: 'string',
      orgId: 'string',
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

