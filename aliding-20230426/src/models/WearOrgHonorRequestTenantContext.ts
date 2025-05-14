// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WearOrgHonorRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 306752103647458
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

