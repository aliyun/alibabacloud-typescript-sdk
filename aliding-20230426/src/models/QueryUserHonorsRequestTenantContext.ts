// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserHonorsRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 189477710813728
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

