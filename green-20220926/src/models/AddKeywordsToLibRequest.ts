// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddKeywordsToLibRequest extends $dara.Model {
  keywords?: string;
  /**
   * @example
   * upload/1e5353c0-0d91-40ba-9d41-ae7abd3fe561.txt
   */
  keywordsObject?: string;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      keywordsObject: 'KeywordsObject',
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: 'string',
      keywordsObject: 'string',
      libId: 'string',
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

