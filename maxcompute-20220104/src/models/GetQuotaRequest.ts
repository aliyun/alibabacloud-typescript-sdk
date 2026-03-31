// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The trusted AccessKey pairs.
   * 
   * @example
   * null
   * 
   * @deprecated
   */
  akProven?: string;
  /**
   * @remarks
   * Specifies whether to include submodules. Valid values: -true: The request includes submodules. -false: The request does not include submodules. This is the default value.
   * 
   * @example
   * false
   */
  mock?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-chengdu
   * 
   * @deprecated
   */
  region?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 520539530998273
   * 
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

