// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFilesFromAuthorizedOssRequestFileDetailsParserConfig extends $dara.Model {
  /**
   * @remarks
   * Model name.
   * 
   * @example
   * qwen-vl-max
   */
  modelName?: string;
  /**
   * @remarks
   * The prompt used when invoking Qwen VL parsing.
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
   * The name of the file to import. Note that the suffix must include the file format type.
   * - Supported formats: pdf, docx, doc, txt, md, pptx, ppt, xlsx, xls, html, png, jpg, jpeg, bmp, gif.
   * - The file name length is limited to 4-128 characters.
   * - For file upload requirements and limits, see [Knowledge base quotas and limits](https://help.aliyun.com/document_detail/2880605.html).
   * 
   * >Notice: When the imported file name duplicates an existing file name in the knowledge base, the operation still returns `Status` as `SUCCESS`, but the file will not actually be imported into the knowledge base, and the existing file with the same name remains unchanged. Please ensure that each imported file name is unique.
   * > To add a new data table and upload data, please use the Alibaba Cloud Model Studio console; the API does not support this.
   * 
   * This parameter is required.
   * 
   * @example
   * this_is_temp_xxxx.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The key name (Key) of the imported file in the OSS Bucket. For details, see [Object naming](https://help.aliyun.com/document_detail/273129.html).
   * 
   * This parameter is required.
   * 
   * @example
   * root/path/this_is_temp_xxxx.pdf
   */
  ossKey?: string;
  /**
   * @remarks
   * Parser type. Possible values include:
   * 
   * - DOCMIND (Intelligent document parsing)
   * - DOCMIND_DIGITAL (Digital document parsing)
   * - DOCMIND_LLM_VERSION (LLM-based document parsing)
   * - DASH_QWEN_VL_PARSER (Qwen VL parsing)
   * - DOCMIND_LLM_VERSION_MEDIA (Audio/video parsing)
   * - AUTO_SELECT (Automatically select parser)
   * 
   * <props="intl">
   * <note>The currently configured parser will be used to parse your uploaded files. If AUTO_SELECT is entered, the parser configured for the corresponding category will be used.</note>
   * 
   * 
   * <props="china">
   * <note>When CategoryType is UNSTRUCTURED, the parser parses your uploaded files according to the data parsing settings of the current category.</note>
   * <note>When CategoryType is SESSION_FILE, the system uses the default method (not changeable) to parse file content.</note>
   * 
   * @example
   * AUTO_SELECT
   */
  parser?: string;
  /**
   * @remarks
   * Parser configuration. Required only when the parser type is set to Qwen VL parsing.
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
   * Specifies the target category for file import. This is the `CategoryId` returned by the AddCategory operation. You can also obtain the category ID from the <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center) - Files tab<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) - Files tab by clicking the ID icon next to the category name. You can also pass in default, which uses the system-created "Default Category".
   * 
   * This parameter is required.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee35xxxxxxxx
   */
  categoryId?: string;
  /**
   * @remarks
   * Category type. Optional. The default value is UNSTRUCTURED. Valid values:
   * - UNSTRUCTURED: Category used for building knowledge base scenarios.
   * 
   * <props="china">
   * 
   * > This operation does not support importing SESSION_FILE used for agent application [session interaction](https://help.aliyun.com/zh/model-studio/user-guide/file-interaction). Please use the **AddFile** operation to upload SESSION_FILE from local.
   * 
   * This parameter is required.
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @remarks
   * The list of files to import. Up to 10 files can be uploaded at a time.
   * > Up to 10 files can be uploaded at a time.
   * >
   * 
   * This parameter is required.
   */
  fileDetails?: AddFilesFromAuthorizedOssRequestFileDetails[];
  /**
   * @remarks
   * The OSS Bucket name. For details, see [Buckets](https://help.aliyun.com/document_detail/177682.html).
   * 
   * This parameter is required.
   * 
   * @example
   * bucketNamexxxxx
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The region ID of the OSS Bucket. For how to obtain it, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  ossRegionId?: string;
  /**
   * @remarks
   * Whether to overwrite the same file in the category by OssKey. The default value is false, meaning no overwrite.
   * 
   * @example
   * false
   */
  overWriteFileByOssKey?: boolean;
  /**
   * @remarks
   * The list of tags associated with the file. The default is empty, meaning the file is not associated with any tags. Up to 10 tags can be passed in.
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

