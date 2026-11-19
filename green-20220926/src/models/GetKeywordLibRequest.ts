// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKeywordLibRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the keyword library.
   * 
   * @example
   * customxx_xxx
   */
  libId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The service code. This parameter is required when you query the preprocessing configurations (PreprocessList) of the library.
   * 
   * @example
   * ugc_moderation_byllm_pro
   */
  serviceCode?: string;
  /**
   * @remarks
   * The code of the keyword library.
   * 
   * - desensitize: Desensitization keyword library.
   * 
   * @example
   * desensitize
   */
  tenantCode?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      regionId: 'RegionId',
      serviceCode: 'ServiceCode',
      tenantCode: 'TenantCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
      regionId: 'string',
      serviceCode: 'string',
      tenantCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

