// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddRecordPermissionRequestTenantContext } from "./AddRecordPermissionRequestTenantContext";


export class AddRecordPermissionRequest extends $dara.Model {
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
  tenantContext?: AddRecordPermissionRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      conferenceId: 'ConferenceId',
      tenantContext: 'TenantContext',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      conferenceId: 'string',
      tenantContext: AddRecordPermissionRequestTenantContext,
      userId: 'string',
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

