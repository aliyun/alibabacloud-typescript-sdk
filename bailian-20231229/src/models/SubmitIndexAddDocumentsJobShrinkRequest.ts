// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIndexAddDocumentsJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of category IDs.
   */
  categoryIdsShrink?: string;
  /**
   * @remarks
   * <props="china">
   * Enables custom chunking (applies only to files appended in this request). For more information, see [Knowledge base](https://help.aliyun.com/document_detail/2807740.html). Valid values (only one value can be specified at a time):
   * 
   * - **length**: chunk by length. Strictly chunks according to the specified `ChunkSize` and `OverlapSize`. If these two parameters are not specified, the system uses default values (`ChunkSize` of 500 and `OverlapSize` of 100). Chunking by length does not support `Separator` (even if specified, it does not take effect).
   * - **page**: chunk by page. If `ChunkSize` is specified, it is also considered during chunking (if not specified, the default value of 500 is used). Chunking by page does not support `OverlapSize` or `Separator` (even if specified, they do not take effect).
   * - **h1**~**h5**: chunk by headings at the corresponding level (`h1` is the first-level heading, and so on, with support up to `h5` fifth-level heading). If `ChunkSize` is specified, it is also considered during chunking (if not specified, the default value of 500 is used). Chunking by heading does not support `OverlapSize` or `Separator` (even if specified, they do not take effect).
   * - **regex**: chunk by regular expression. The `Separator` parameter must be specified. If `ChunkSize` is specified, it is also considered during chunking (if not specified, the default value of 500 is used). Chunking by regex does not support `OverlapSize` (even if specified, it does not take effect).
   * 
   * Default value: empty, which uses intelligent chunking.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not yet available. Do not specify this parameter.
   * 
   * @example
   * length
   */
  chunkMode?: string;
  /**
   * @remarks
   * <props="china">
   * The chunk length, which is the maximum number of characters per text chunk (applies only to files appended in this request). When this length is exceeded:
   * 
   * - **Intelligent chunking** (without specifying `chunkMode`): the text is likely to be truncated.
   * - **Custom chunking** (with `chunkMode` specified): the text is forcibly split.
   * 
   * Valid values: 1 to 6000. If this parameter is not specified, the default value of 500 is used.
   * 
   * For more information, see [Knowledge base](https://help.aliyun.com/document_detail/2807740.html).
   * 
   * > If you specify `ChunkSize` with a value less than 100, you must also specify `OverlapSize`. You can also leave both parameters unspecified (the system uses default values).
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not yet available. Do not specify this parameter.
   * 
   * @example
   * 128
   */
  chunkSize?: number;
  /**
   * @remarks
   * The list of file IDs.
   */
  documentIdsShrink?: string;
  /**
   * @remarks
   * Specifies whether to enable header assembly for Excel files. When enabled, the knowledge base treats the first row of all xlsx and xls files as headers and automatically appends them to each text chunk (data row), preventing the large language model from treating headers as regular data rows.
   * 
   * 
   * > Enable this feature only when all imported files are in xlsx or xls format and contain headers. Otherwise, leave it disabled.
   * >
   * 
   * Valid values:
   * - true: Enabled.
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
   * The knowledge base ID, which is the `Data.Id` returned by the **CreateIndex** operation.
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
   * The chunk overlap length (applies only to files appended in this request). It indicates the number of overlapping characters between the current text chunk and the previous text chunk. For more information, see [Knowledge base](https://help.aliyun.com/document_detail/2807740.html). Valid values: 0 to 1024.
   * 
   * If this parameter is not specified, the default value of 100 is used.
   * > The value of `OverlapSize` must be less than the value of `ChunkSize`. Otherwise, chunking exceptions may occur.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not yet available. Do not specify this parameter.
   * 
   * @example
   * 16
   */
  overlapSize?: number;
  /**
   * @remarks
   * <props="china">
   * The sentence separator, which takes effect only when `chunkMode` is set to **regex** (otherwise, it does not take effect even if specified). You can specify a regular expression (only one is supported) to split the file into small text chunks. For more information, see [Knowledge base](https://help.aliyun.com/document_detail/2807740.html).
   * 
   * When using intelligent chunking (without specifying `chunkMode`), keep the default empty value.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This parameter is not yet available. Do not specify this parameter.
   * 
   * @example
   * (?<=。)
   */
  separator?: string;
  /**
   * @remarks
   * The data source type. Valid values:
   * - DATA_CENTER_CATEGORY: category type. Imports all documents under specified categories in <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center). Multiple categories are supported.
   * - DATA_CENTER_FILE: document type. Imports specified files from <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center). Multiple files are supported.
   * 
   * > If this parameter is set to DATA_CENTER_CATEGORY, you must specify the `CategoryIds` parameter. If this parameter is set to DATA_CENTER_FILE, you must specify the `DocumentIds` parameter.
   * >
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

