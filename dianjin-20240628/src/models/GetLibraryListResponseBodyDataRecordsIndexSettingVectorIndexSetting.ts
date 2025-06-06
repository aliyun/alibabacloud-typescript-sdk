// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLibraryListResponseBodyDataRecordsIndexSettingVectorIndexSetting extends $dara.Model {
  /**
   * @example
   * ADB
   */
  category?: string;
  /**
   * @example
   * DashScope
   */
  embeddingType?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * null
   */
  rankThreshold?: number;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      embeddingType: 'embeddingType',
      enable: 'enable',
      rankThreshold: 'rankThreshold',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      embeddingType: 'string',
      enable: 'boolean',
      rankThreshold: 'number',
      topK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

