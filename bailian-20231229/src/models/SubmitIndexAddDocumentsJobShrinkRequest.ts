// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIndexAddDocumentsJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of category IDs.
   */
  categoryIdsShrink?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The custom chunking mode. This setting applies only to the documents added in the current job. For more information, see [knowledge base](https://help.aliyun.com/document_detail/2807740.html). Valid values (you can specify only one value):
   * 
   * - **length**: Splits the text by a fixed length. The chunking strictly follows the specified `ChunkSize` and `OverlapSize`. If you do not specify these parameters, the system uses the default values: a `ChunkSize` of 500 and an `OverlapSize` of 100. This mode ignores the `Separator` parameter.
   * 
   * - **page**: Splits the text by page. If `ChunkSize` is specified, its value is also applied during chunking. If `ChunkSize` is not set, a default value of 500 is used. This mode ignores the `OverlapSize` and `Separator` parameters.
   * 
   * - **h1**: Splits the text by level-1 headings. If `ChunkSize` is specified, its value is also applied during chunking. If `ChunkSize` is not set, a default value of 500 is used. This mode ignores the `OverlapSize` and `Separator` parameters.
   * 
   * - **h2**: Splits the text by level-2 headings. If `ChunkSize` is specified, its value is also applied during chunking. If `ChunkSize` is not set, a default value of 500 is used. This mode ignores the `OverlapSize` and `Separator` parameters.
   * 
   * - **regex**: Splits the text by using a regular expression. The `Separator` parameter is required for this mode. If `ChunkSize` is specified, its value is also applied during chunking. If `ChunkSize` is not set, a default value of 500 is used. This mode ignores the `OverlapSize` parameter.
   * 
   * If this parameter is not set, intelligent chunking is used by default.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not specify it.
   * 
   * @example
   * length
   */
  chunkMode?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * The chunk size. Specifies the maximum number of characters for each text chunk. This setting applies only to the documents added in the current job. If a text segment exceeds this size, the behavior depends on the chunking mode:
   * 
   * - **Intelligent chunking** (if `ChunkMode` is not set): The text may be truncated.
   * 
   * - **Custom chunking** (if `ChunkMode` is set): The text is forcibly split.
   * 
   * The value must be in the range of [1, 6000]. Defaults to 500 if not specified.
   * 
   * For more information, see [knowledge base](https://help.aliyun.com/document_detail/2807740.html).
   * 
   * > If you specify a `ChunkSize` less than 100, you must also specify the `OverlapSize` parameter. You can also omit both parameters to use the system defaults.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not specify it.
   * 
   * @example
   * 128
   */
  chunkSize?: number;
  /**
   * @remarks
   * A list of file IDs.
   */
  documentIdsShrink?: string;
  /**
   * @remarks
   * Specifies whether to include Excel file headers. If set to `true`, the knowledge base treats the first row of all .xlsx and .xls files as the header and automatically prepends it to each text chunk (data row). This prevents the large language model (LLM) from misinterpreting the header as a regular data row.
   * 
   * > Enable this parameter only if all imported documents are Excel files that contain a header.
   * 
   * Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableHeaders?: boolean;
  extraShrink?: string;
  /**
   * @remarks
   * The knowledge base ID. This is the `Data.Id` returned by the **CreateIndex** API.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0alxxxx
   */
  indexId?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * Specifies the number of overlapping characters between adjacent text chunks. This setting applies only to the documents added in the current job. For more information, see [knowledge base](https://help.aliyun.com/document_detail/2807740.html). The value must be in the range of [0, 1024].
   * 
   * Defaults to 100 if not specified.
   * 
   * > The value of `OverlapSize` must be less than the value of `ChunkSize`. Otherwise, the chunking process may fail.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not specify it.
   * 
   * @example
   * 16
   */
  overlapSize?: number;
  /**
   * @remarks
   * <props="china">
   * 
   * The separator for chunking. This parameter is used only when `ChunkMode` is set to **regex**. You can specify a single regular expression (multiple expressions are not supported) to split the file into smaller text chunks. For more information, see [knowledge base](https://help.aliyun.com/document_detail/2807740.html).
   * 
   * When you use intelligent chunking (when `ChunkMode` is not specified), leave this parameter empty.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not available. Do not specify it.
   * 
   * @example
   * (?<=。)
   */
  separator?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - DATA_CENTER_CATEGORY: Imports all documents from specified categories in <props="china">[application data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[application data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center). You can import documents from multiple categories.
   * 
   * - DATA_CENTER_FILE: Imports specified files from <props="china">[application data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[application data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center). You can import multiple files.
   * 
   * > If you set this parameter to `DATA_CENTER_CATEGORY`, you must specify the `CategoryIds` parameter. If you set this parameter to `DATA_CENTER_FILE`, you must specify the `DocumentIds` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * DATA_CENTER_FILE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      categoryIdsShrink: 'CategoryIds',
      chunkMode: 'ChunkMode',
      chunkSize: 'ChunkSize',
      documentIdsShrink: 'DocumentIds',
      enableHeaders: 'EnableHeaders',
      extraShrink: 'Extra',
      indexId: 'IndexId',
      overlapSize: 'OverlapSize',
      separator: 'Separator',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIdsShrink: 'string',
      chunkMode: 'string',
      chunkSize: 'number',
      documentIdsShrink: 'string',
      enableHeaders: 'boolean',
      extraShrink: 'string',
      indexId: 'string',
      overlapSize: 'number',
      separator: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

