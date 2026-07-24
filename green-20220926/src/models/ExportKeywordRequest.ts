// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportKeywordRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword library ID.
   * 
   * @example
   * customxx_xxxx
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
   * The vocabulary encoding.
   * 
   * - desensitize: sensitive data masking vocabulary
   * 
   * @example
   * desensitize
   */
  tenantCode?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      regionId: 'RegionId',
      tenantCode: 'TenantCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
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

