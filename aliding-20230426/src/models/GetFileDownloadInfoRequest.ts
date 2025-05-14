// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFileDownloadInfoRequestOption } from "./GetFileDownloadInfoRequestOption";
import { GetFileDownloadInfoRequestTenantContext } from "./GetFileDownloadInfoRequestTenantContext";


export class GetFileDownloadInfoRequest extends $dara.Model {
  /**
   * @example
   * 798xxxxx
   */
  dentryId?: string;
  option?: GetFileDownloadInfoRequestOption;
  /**
   * @example
   * 854xxxx
   */
  spaceId?: string;
  tenantContext?: GetFileDownloadInfoRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      dentryId: 'DentryId',
      option: 'Option',
      spaceId: 'SpaceId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryId: 'string',
      option: GetFileDownloadInfoRequestOption,
      spaceId: 'string',
      tenantContext: GetFileDownloadInfoRequestTenantContext,
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

