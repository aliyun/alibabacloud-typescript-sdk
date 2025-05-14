// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLibraryResponseBodyDataIndexSetting } from "./GetLibraryResponseBodyDataIndexSetting";


export class GetLibraryResponseBodyData extends $dara.Model {
  description?: string;
  /**
   * @example
   * 10
   */
  documentCount?: number;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 19386728376
   */
  id?: string;
  indexSetting?: GetLibraryResponseBodyDataIndexSetting;
  libraryName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      documentCount: 'documentCount',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      indexSetting: 'indexSetting',
      libraryName: 'libraryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      documentCount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      indexSetting: GetLibraryResponseBodyDataIndexSetting,
      libraryName: 'string',
    };
  }

  validate() {
    if(this.indexSetting && typeof (this.indexSetting as any).validate === 'function') {
      (this.indexSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

