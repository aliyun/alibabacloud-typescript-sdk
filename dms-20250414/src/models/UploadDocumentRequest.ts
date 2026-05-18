// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDocumentRequest extends $dara.Model {
  /**
   * @example
   * 50
   */
  chunkOverlap?: number;
  /**
   * @example
   * 250
   */
  chunkSize?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * ADBPGLoader
   */
  documentLoaderName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.md
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kb-***
   */
  kbUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  location?: string;
  separators?: string[];
  /**
   * @example
   * qwen3-8b
   */
  splitterModel?: string;
  /**
   * @example
   * ChineseRecursiveTextSplitter
   */
  textSplitterName?: string;
  /**
   * @example
   * false
   */
  vlEnhance?: boolean;
  /**
   * @example
   * false
   */
  zhTitleEnhance?: boolean;
  static names(): { [key: string]: string } {
    return {
      chunkOverlap: 'ChunkOverlap',
      chunkSize: 'ChunkSize',
      description: 'Description',
      documentLoaderName: 'DocumentLoaderName',
      fileName: 'FileName',
      kbUuid: 'KbUuid',
      location: 'Location',
      separators: 'Separators',
      splitterModel: 'SplitterModel',
      textSplitterName: 'TextSplitterName',
      vlEnhance: 'VlEnhance',
      zhTitleEnhance: 'ZhTitleEnhance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkOverlap: 'number',
      chunkSize: 'number',
      description: 'string',
      documentLoaderName: 'string',
      fileName: 'string',
      kbUuid: 'string',
      location: 'string',
      separators: { 'type': 'array', 'itemType': 'string' },
      splitterModel: 'string',
      textSplitterName: 'string',
      vlEnhance: 'boolean',
      zhTitleEnhance: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.separators)) {
      $dara.Model.validateArray(this.separators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

