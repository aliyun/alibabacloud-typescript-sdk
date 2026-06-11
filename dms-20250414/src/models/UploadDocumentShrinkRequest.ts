// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDocumentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The number of overlapping characters between adjacent chunks. This value cannot exceed `ChunkSize`. The default is 50.
   * 
   * @example
   * 50
   */
  chunkOverlap?: number;
  /**
   * @remarks
   * The size of each document chunk. The default is 250, and the maximum is 2,048.
   * 
   * @example
   * 250
   */
  chunkSize?: number;
  /**
   * @remarks
   * The description of the document.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the document loader. The default is `ADBPGLoader`.
   * 
   * @example
   * ADBPGLoader
   */
  documentLoaderName?: string;
  /**
   * @remarks
   * The name of the document.
   * 
   * This parameter is required.
   * 
   * @example
   * test.md
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * kb-***
   */
  kbUuid?: string;
  /**
   * @remarks
   * The OSS location of the input file. Construct this path by appending the file name to the `UploadDir` value returned by the `DescribeKnowledgeBaseUploadSignature` operation.
   * 
   * This parameter is required.
   */
  location?: string;
  /**
   * @remarks
   * An array of strings used to split text.
   * 
   * > - This critical parameter affects data chunking results and is related to the splitter specified by `TextSplitterName`.
   * >
   * > - In most cases, you can omit this parameter. The service automatically assigns default separators based on `TextSplitterName`.
   */
  separatorsShrink?: string;
  /**
   * @remarks
   * The splitter model to use. The default is `qwen3-8b`.
   * 
   * @example
   * qwen3-8b
   */
  splitterModel?: string;
  /**
   * @remarks
   * The name of the text splitter.
   * 
   * @example
   * ChineseRecursiveTextSplitter
   */
  textSplitterName?: string;
  /**
   * @remarks
   * Specifies whether to enable visual-linguistic (VL) enhanced content recognition for complex documents. The default is false.
   * 
   * @example
   * false
   */
  vlEnhance?: boolean;
  /**
   * @remarks
   * Specifies whether to enable title enhancement.
   * 
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
      separatorsShrink: 'Separators',
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
      separatorsShrink: 'string',
      splitterModel: 'string',
      textSplitterName: 'string',
      vlEnhance: 'boolean',
      zhTitleEnhance: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

