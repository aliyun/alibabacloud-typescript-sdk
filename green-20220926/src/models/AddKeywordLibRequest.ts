// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddKeywordLibRequest extends $dara.Model {
  /**
   * @remarks
   * Keywords, with multiple keywords separated by \\n.
   * 
   * @example
   * keywords1\\nkeywords2
   */
  keywords?: string;
  /**
   * @remarks
   * The name of the keywords file.
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
   * test_keyword_lib
   */
  libName?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      keywordsObject: 'KeywordsObject',
      libName: 'LibName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: 'string',
      keywordsObject: 'string',
      libName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

