// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteKeywordRequest extends $dara.Model {
  /**
   * @remarks
   * The ids\\" list of keywords.
   * 
   * @example
   * [6715465]
   */
  keywordIdList?: string;
  /**
   * @remarks
   * The ids of keywords.
   * 
   * @example
   * [16754493]
   */
  keywordIds?: string;
  /**
   * @remarks
   * Library id
   * 
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
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

