// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The trusted AccessKey pairs.
   * 
   * @example
   * null
   */
  akProven?: string;
  /**
   * @remarks
   * Specifies whether to include submodules. Valid values: true and false. -true: The request includes submodules. -false (default): The request does not include submodules.
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
   */
  region?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 483212237127906
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

