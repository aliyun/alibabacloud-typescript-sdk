// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQuotaPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 416441016836866
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
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

