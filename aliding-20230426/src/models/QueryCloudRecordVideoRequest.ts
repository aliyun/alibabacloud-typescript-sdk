// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCloudRecordVideoRequestTenantContext } from "./QueryCloudRecordVideoRequestTenantContext";


export class QueryCloudRecordVideoRequest extends $dara.Model {
  tenantContext?: QueryCloudRecordVideoRequestTenantContext;
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
      tenantContext: 'TenantContext',
      conferenceId: 'conferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: QueryCloudRecordVideoRequestTenantContext,
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

