// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddKeywordsRequest extends $dara.Model {
  /**
   * @remarks
   * The keywords. Separate multiple keywords with 
   * .
   * 
   * @example
   * Keyword1\\nKeyword2
   */
  keywords?: string;
  /**
   * @remarks
   * The keyword file name.
   * 
   * @example
   * upload/1e5353c0-0d91-40ba-9d41-ae7abd3fe561.txt
   */
  keywordsObject?: string;
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
   * The library code.
   * 
   * - desensitize: masking library
   * 
   * @example
   * desensitize
   */
  tenantCode?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      keywordsObject: 'KeywordsObject',
      libId: 'LibId',
      regionId: 'RegionId',
      tenantCode: 'TenantCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: 'string',
      keywordsObject: 'string',
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

