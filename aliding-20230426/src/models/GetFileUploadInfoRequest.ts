// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFileUploadInfoRequestOption } from "./GetFileUploadInfoRequestOption";
import { GetFileUploadInfoRequestTenantContext } from "./GetFileUploadInfoRequestTenantContext";


export class GetFileUploadInfoRequest extends $dara.Model {
  option?: GetFileUploadInfoRequestOption;
  /**
   * @example
   * dentryUuid
   */
  parentDentryUuid?: string;
  /**
   * @example
   * HEADER_SIGNATURE
   */
  protocol?: string;
  tenantContext?: GetFileUploadInfoRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      option: 'Option',
      parentDentryUuid: 'ParentDentryUuid',
      protocol: 'Protocol',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      option: GetFileUploadInfoRequestOption,
      parentDentryUuid: 'string',
      protocol: 'string',
      tenantContext: GetFileUploadInfoRequestTenantContext,
    };
  }

  validate() {
    if(this.option && typeof (this.option as any).validate === 'function') {
      (this.option as any).validate();
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

