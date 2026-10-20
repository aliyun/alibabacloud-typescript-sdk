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
   * # Role
   * You are a professional image content annotator, skilled at identifying and describing the content in images.
   * # Task objective
   * Based on the input image, describe the content in the image in detail
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
   * The name of the file to import. Make sure that the file name extension is included.
   * - Supported formats: pdf, docx, doc, txt, md, pptx, ppt, xlsx, xls, html, png, jpg, jpeg, bmp, and gif.
   * - The file name must be 4 to 128 characters in length.
   * - For more information about the limits on file uploads, see [Knowledge base quotas and limits](https://help.aliyun.com/document_detail/2880605.html).
   * 
   * >Notice: If the name of the imported file is the same as the name of an existing file in the knowledge base, the operation still returns SUCCESS for Status, but the file is not actually imported into the knowledge base and the existing file with the same name remains unchanged. Make sure that the name of each imported file is unique.</notice>
   * > To add a data table and upload data, use the Alibaba Cloud Model Studio console. This is not supported by the API.
   * 
   * This parameter is required.
   * 
   * @example
   * this_is_temp_xxxx.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The key of the imported file in the OSS bucket. For more information, see [Object naming](https://help.aliyun.com/document_detail/273129.html).
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
   * - DOCMIND (Intelligent document parsing)
   * - DOCMIND_DIGITAL (Electronic document parsing)
   * - DOCMIND_LLM_VERSION (Large model document parsing)
   * - DASH_QWEN_VL_PARSER (Qwen VL parsing)
   * - DOCMIND_LLM_VERSION_MEDIA (Audio and video parsing)
   * - AUTO_SELECT (Automatic parser selection)
   * 
   * <props="intl">
   * <note>The uploaded file is parsed by using the specified parser. If you set this parameter to AUTO_SELECT, the parser configured for the category is used.</note>
   * 
   * 
   * <props="china">
   * <note>If CategoryType is set to UNSTRUCTURED, the file is parsed based on the data parsing settings of the current category.</note>
   * <note>If CategoryType is set to SESSION_FILE, the system parses the file content by using the default method, which cannot be changed.</note>
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
   * The ID of the destination category for the imported files. This is the CategoryId returned by the AddCategory operation. You can also obtain the category ID by clicking the ID icon next to the category name on the <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center) > Files tab<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) > Files tab. You can set this parameter to default to use the default category created by the system.
   * 
   * This parameter is required.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee35xxxxxxxx
   */
  categoryId?: string;
  /**
   * @remarks
   * The category type. This parameter is optional. Default value: UNSTRUCTURED. Valid values:
   * - UNSTRUCTURED: category, used for building knowledge bases.
   * 
   * <props="china">
   * 
   * > This operation does not support importing SESSION_FILE for [session interaction](https://www.alibabacloud.com/help/en/model-studio/user-guide/file-interaction) in agent applications. Use the **AddFile** operation to upload SESSION_FILE from your local machine.
   * 
   * This parameter is required.
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @remarks
   * The list of files to import. You can upload up to 10 files at a time.
   * > You can upload up to 10 files at a time.
   * >
   * 
   * This parameter is required.
   */
  fileDetails?: AddFilesFromAuthorizedOssRequestFileDetails[];
  /**
   * @remarks
   * The name of the OSS bucket. For more information, see [Buckets](https://help.aliyun.com/document_detail/177682.html). Before you import data from OSS for the first time, you must complete the authorization as prompted in the Model Studio console and add a tag with the key bailian-datahub-access and the value read to the destination bucket. You must also authorize the OSS service-linked role as prompted in the Model Studio console (service name: datahub.sfm.aliyuncs.com).
   * 
   * This parameter is required.
   * 
   * @example
   * bucketNamexxxxx
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The region ID of the OSS bucket. For more information about how to obtain the ID, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  ossRegionId?: string;
  /**
   * @remarks
   * Specifies whether to overwrite identical files in the category based on the OssKey. Default value: false, which means identical files are not overwritten.
   * 
   * @example
   * false
   */
  overWriteFileByOssKey?: boolean;
  /**
   * @remarks
   * The list of tags associated with the file. Default value: empty, which means the file is not associated with any tags. You can specify up to 10 tags.
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

