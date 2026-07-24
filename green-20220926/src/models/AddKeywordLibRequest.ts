// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddKeywordLibRequest extends $dara.Model {
  /**
   * @remarks
   * The keywords. Separate multiple keywords with 
   * .
   * 
   * @example
   * keyword1\\nkeyword2
   */
  keywords?: string;
  /**
   * @remarks
   * The name of the keyword file.
   * 
   * @example
   * upload/1e5353c0-0d91-40ba-9d41-ae7abd3fe561.txt
   */
  keywordsObject?: string;
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
   * The properties.
   * 
   * @example
   * {"attribute":"xx"}
   */
  properties?: string;
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
   * - desensitize: desensitization library
   * 
   * @example
   * desensitize
   */
  tenantCode?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      keywordsObject: 'KeywordsObject',
      libName: 'LibName',
      properties: 'Properties',
      regionId: 'RegionId',
      tenantCode: 'TenantCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: 'string',
      keywordsObject: 'string',
      libName: 'string',
      properties: 'string',
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

