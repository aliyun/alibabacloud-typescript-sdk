// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFilesFromAuthorizedOssRequestFileDetailsParserConfig extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-vl-max
   */
  modelName?: string;
  /**
   * @remarks
   * The prompt used when calling Qwen VL parsing.
   * 
   * @example
   * #角色
   * 你是一个专业的图片内容标注人员，擅长识别并描述出图片中的内容。
   * # 任务目标
   * 请结合输入图片，详细描述图片中的内容。
   */
  modelPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
      modelPrompt: 'ModelPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      modelPrompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFilesFromAuthorizedOssRequestFileDetails extends $dara.Model {
  /**
   * @remarks
   * The name of the file to import. The file name must include the file format extension.
   * - Supported formats: pdf, docx, doc, txt, md, pptx, ppt, xlsx, xls, html, png, jpg, jpeg, bmp, and gif.
   * - The file name must be 4 to 128 characters in length.
   * - For file upload requirements and limits, see [Knowledge base quotas and limits](https://help.aliyun.com/document_detail/2880605.html).
   * 
   * >Notice: If the name of the imported file is the same as an existing file in the knowledge base, the operation still returns a `Status` of `SUCCESS`, but the file is not actually imported. The existing file with the same name remains unchanged. Make sure that each imported file name is unique.
   * > To create a data table and upload data, use the Model Studio console. This is not supported through the API.
   * 
   * This parameter is required.
   * 
   * @example
   * this_is_temp_xxxx.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The key of the file in the OSS bucket. For more information, see [Object naming conventions](https://help.aliyun.com/document_detail/273129.html).
   * 
   * This parameter is required.
   * 
   * @example
   * root/path/this_is_temp_xxxx.pdf
   */
  ossKey?: string;
  /**
   * @remarks
   * The parser type. Valid values:
   * 
   * - DOCMIND: intelligent document parsing.
   * - DOCMIND_DIGITAL: electronic document parsing.
   * - DOCMIND_LLM_VERSION: LLM-based document parsing.
   * - DASH_QWEN_VL_PARSER: Qwen VL parsing.
   * - DOCMIND_LLM_VERSION_MEDIA: audio and video parsing.
   * - AUTO_SELECT: automatic parser selection.
   * 
   * <props="intl">
   * <note>The uploaded file is parsed by using the specified parser. If you set this parameter to AUTO_SELECT, the parser configured for the category is used.</note>
   * 
   * 
   * <props="china">
   * <note>When CategoryType is UNSTRUCTURED, the parser parses the uploaded file based on the data parsing settings of the current category.</note>
   * <note>When CategoryType is SESSION_FILE, the system uses the default method (which cannot be changed) to parse the file content.</note>
   * 
   * @example
   * AUTO_SELECT
   */
  parser?: string;
  /**
   * @remarks
   * The parser configuration. This parameter is required only when the parser type is set to Qwen VL parsing.
   */
  parserConfig?: AddFilesFromAuthorizedOssRequestFileDetailsParserConfig;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      ossKey: 'OssKey',
      parser: 'Parser',
      parserConfig: 'ParserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      ossKey: 'string',
      parser: 'string',
      parserConfig: AddFilesFromAuthorizedOssRequestFileDetailsParserConfig,
    };
  }

  validate() {
    if(this.parserConfig && typeof (this.parserConfig as any).validate === 'function') {
      (this.parserConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFilesFromAuthorizedOssRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the category to which the files are imported. This is the `CategoryId` returned by the AddCategory operation. You can also obtain the category ID by clicking the ID icon next to the category name on the <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center) - Files tab<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) - Files tab. You can pass in `default` to use the system-created default category.
   * 
   * This parameter is required.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee35xxxxxxxx
   */
  categoryId?: string;
  /**
   * @remarks
   * The category type. Optional. Default value: UNSTRUCTURED. Valid values:
   * - UNSTRUCTURED: category for building knowledge base scenarios.
   * 
   * <props="china">
   * 
   * > This operation does not support importing SESSION_FILE for agent application [conversation interaction](https://www.alibabacloud.com/help/en/model-studio/user-guide/file-interaction). Use the **AddFile** operation to upload SESSION_FILE from a local source.
   * 
   * This parameter is required.
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @remarks
   * The list of files to import. A maximum of 10 files can be uploaded at a time.
   * > A maximum of 10 files can be uploaded at a time.
   * >
   * 
   * This parameter is required.
   */
  fileDetails?: AddFilesFromAuthorizedOssRequestFileDetails[];
  /**
   * @remarks
   * The name of the OSS bucket. For more information, see [Buckets](https://help.aliyun.com/document_detail/177682.html).
   * 
   * This parameter is required.
   * 
   * @example
   * bucketNamexxxxx
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The region ID of the OSS bucket. For more information, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  ossRegionId?: string;
  /**
   * @remarks
   * Specifies whether to overwrite files with the same OssKey in the category. Default value: false, which means files are not overwritten.
   * 
   * @example
   * false
   */
  overWriteFileByOssKey?: boolean;
  /**
   * @remarks
   * The list of tags associated with the file. Default value: empty, which means the file is not associated with any tags. A maximum of 10 tags can be specified.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      fileDetails: 'FileDetails',
      ossBucketName: 'OssBucketName',
      ossRegionId: 'OssRegionId',
      overWriteFileByOssKey: 'OverWriteFileByOssKey',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryType: 'string',
      fileDetails: { 'type': 'array', 'itemType': AddFilesFromAuthorizedOssRequestFileDetails },
      ossBucketName: 'string',
      ossRegionId: 'string',
      overWriteFileByOssKey: 'boolean',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fileDetails)) {
      $dara.Model.validateArray(this.fileDetails);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

