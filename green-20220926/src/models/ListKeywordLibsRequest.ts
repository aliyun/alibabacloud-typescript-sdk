// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKeywordLibsRequest extends $dara.Model {
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
   * The service code. If specified, the PreprocessList for each library under this service dimension is returned.
   * 
   * @example
   * ugc_moderation_byllm_pro
   */
  serviceCode?: string;
  /**
   * @remarks
   * The library code.
   * - desensitize: Desensitization library
   * 
   * @example
   * desensitize
   */
  tenantCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceCode: 'ServiceCode',
      tenantCode: 'TenantCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

