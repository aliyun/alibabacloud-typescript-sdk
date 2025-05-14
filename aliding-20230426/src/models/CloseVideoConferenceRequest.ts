// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CloseVideoConferenceRequestTenantContext } from "./CloseVideoConferenceRequestTenantContext";


export class CloseVideoConferenceRequest extends $dara.Model {
  tenantContext?: CloseVideoConferenceRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 607452e01401526ee39609e1
   */
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      conferenceId: 'conferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: CloseVideoConferenceRequestTenantContext,
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

