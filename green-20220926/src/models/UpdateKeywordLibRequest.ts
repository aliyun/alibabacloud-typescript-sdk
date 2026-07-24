// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKeywordLibRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the keyword library.
   * 
   * @example
   * custom_xxxx
   */
  libId?: string;
  /**
   * @remarks
   * The name of the keyword library.
   * 
   * @example
   * TestLibrary.
   */
  libName?: string;
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
   * The keyword library code.
   * 
   * - desensitize: desensitization keyword library
   * 
   * @example
   * desensitize
   */
  tenantCode?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      libName: 'LibName',
      regionId: 'RegionId',
      tenantCode: 'TenantCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
      libName: 'string',
      regionId: 'string',
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

