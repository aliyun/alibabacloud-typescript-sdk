// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDocContentTakIdRequestTenantContext } from "./GetDocContentTakIdRequestTenantContext";


export class GetDocContentTakIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qnYMoO1rWxrkmoj2I5L2PYkoJ47Z3je9
   */
  dentryUuid?: string;
  generateCp?: boolean;
  /**
   * @example
   * markdown
   */
  targetFormat?: string;
  tenantContext?: GetDocContentTakIdRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      generateCp: 'GenerateCp',
      targetFormat: 'TargetFormat',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      generateCp: 'boolean',
      targetFormat: 'string',
      tenantContext: GetDocContentTakIdRequestTenantContext,
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

