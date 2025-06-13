// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKeywordLibsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2022-11-30 16:30:29
   */
  gmtModified?: string;
  /**
   * @example
   * 10
   */
  keywordCount?: string;
  /**
   * @example
   * custom_xxxxx
   */
  libId?: string;
  libName?: string;
  serviceCodes?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 19964*****086772
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      keywordCount: 'KeywordCount',
      libId: 'LibId',
      libName: 'LibName',
      serviceCodes: 'ServiceCodes',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'string',
      keywordCount: 'string',
      libId: 'string',
      libName: 'string',
      serviceCodes: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

