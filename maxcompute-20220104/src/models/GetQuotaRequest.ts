// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaRequest extends $dara.Model {
  /**
   * @deprecated
   */
  akProven?: string;
  /**
   * @remarks
   * Specifies whether to include submodules. Valid values: -true: includes submodules. -false (default): does not include submodules.
   * 
   * @example
   * false
   */
  mock?: boolean;
  /**
   * @deprecated
   */
  region?: string;
  /**
   * @deprecated
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      akProven: 'AkProven',
      mock: 'mock',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProven: 'string',
      mock: 'boolean',
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

