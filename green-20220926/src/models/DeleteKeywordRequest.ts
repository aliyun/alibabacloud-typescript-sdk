// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteKeywordRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the keywords to delete.
   * 
   * @example
   * [6715465]
   */
  keywordIdList?: string;
  /**
   * @remarks
   * The IDs of the keywords to delete.
   * 
   * @example
   * [16754493]
   */
  keywordIds?: string;
  /**
   * @remarks
   * The ID of the keyword library.
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
   * The code of the keyword library.
   * 
   * - desensitize: masking keyword library.
   * 
   * @example
   * desensitize
   */
  tenantCode?: string;
  static names(): { [key: string]: string } {
    return {
      keywordIdList: 'KeywordIdList',
      keywordIds: 'KeywordIds',
      libId: 'LibId',
      regionId: 'RegionId',
      tenantCode: 'TenantCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordIdList: 'string',
      keywordIds: 'string',
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

