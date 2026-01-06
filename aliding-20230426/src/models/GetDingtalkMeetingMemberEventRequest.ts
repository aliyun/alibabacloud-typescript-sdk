// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkMeetingMemberEventRequestTenantContext extends $dara.Model {
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

export class GetDingtalkMeetingMemberEventRequest extends $dara.Model {
  tenantContext?: GetDingtalkMeetingMemberEventRequestTenantContext;
  /**
   * @example
   * 1638360000000
   */
  beginTime?: number;
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
   * 1638363600000
   */
  endTime?: number;
  /**
   * @example
   * 21001
   */
  orgId?: string;
  /**
   * @example
   * 34242
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      beginTime: 'beginTime',
      conferenceId: 'conferenceId',
      endTime: 'endTime',
      orgId: 'orgId',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: GetDingtalkMeetingMemberEventRequestTenantContext,
      beginTime: 'number',
      conferenceId: 'string',
      endTime: 'number',
      orgId: 'string',
      workNo: 'string',
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

