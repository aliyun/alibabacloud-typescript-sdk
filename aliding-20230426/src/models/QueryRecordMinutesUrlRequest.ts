// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryRecordMinutesUrlRequestTenantContext } from "./QueryRecordMinutesUrlRequestTenantContext";


export class QueryRecordMinutesUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * minutes
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1dddwrqrq
   */
  conferenceId?: string;
  tenantContext?: QueryRecordMinutesUrlRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      conferenceId: 'ConferenceId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      conferenceId: 'string',
      tenantContext: QueryRecordMinutesUrlRequestTenantContext,
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

