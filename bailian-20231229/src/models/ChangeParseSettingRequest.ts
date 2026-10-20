// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeParseSettingRequestParserConfig extends $dara.Model {
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
   * You are a professional image content annotator who excels at identifying and describing the content in images.
   * # Task Objective
   * Based on the input image, describe the content in the image in detail
   */
  modelPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'modelName',
      modelPrompt: 'modelPrompt',
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

export class ChangeParseSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID, which is the `CategoryId` returned by the **AddCategory** operation. You can also obtain it by clicking the ID icon next to the category name on the <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center) - Files tab<props="intl">[Application Data](https://bailian.console.alibabacloud.com/?tab=app#/data-center) - Unstructured Data tab.
   * 
   * This parameter is required.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee35xxxxxxxx
   */
  categoryId?: string;
  /**
   * @remarks
   * The file type (extension). Valid values:
   * - doc
   * - docx
   * - ppt
   * - pptx
   * - xls
   * - xlsx
   * - md
   * - txt
   * - pdf
   * - png
   * - jpg
   * - jpeg
   * - bmp
   * - gif
   * - html
   * 
   * This parameter is required.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * The parser identifier code. Different parsers are applicable to different scenarios. For more information, see "Knowledge Base". Valid values:
   * - DOCMIND (intelligent document parsing)
   * - DOCMIND_DIGITAL (electronic document parsing)
   * - DOCMIND_LLM_VERSION (large model document parsing)
   * - DASH_QWEN_VL_PARSER (Qwen VL parsing)
   * - DOCMIND_LLM_VERSION_MEDIA (audio and video parsing)
   * 
   * This parameter is required.
   * 
   * @example
   * DOCMIND
   */
  parser?: string;
  /**
   * @remarks
   * The parser configuration. This parameter is required only when the parser is set to Qwen VL parsing.
   */
  parserConfig?: ChangeParseSettingRequestParserConfig;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      fileType: 'FileType',
      parser: 'Parser',
      parserConfig: 'ParserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      fileType: 'string',
      parser: 'string',
      parserConfig: ChangeParseSettingRequestParserConfig,
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

