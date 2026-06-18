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
   * The prompt to use when calling the Qwen VL Parser.
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
   * The category ID. This is the `CategoryId` returned by the **AddCategory** operation. You can also obtain the ID from the <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center) - File tab<props="intl">[Application Data](https://bailian.console.alibabacloud.com/?tab=app#/data-center) - Unstructured Data tab by clicking the ID icon next to the category name.
   * 
   * This parameter is required.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee35xxxxxxxx
   */
  categoryId?: string;
  /**
   * @remarks
   * The file type, specified by its extension. Valid values:
   * 
   * - doc
   * 
   * - docx
   * 
   * - ppt
   * 
   * - pptx
   * 
   * - xls
   * 
   * - xlsx
   * 
   * - md
   * 
   * - txt
   * 
   * - pdf
   * 
   * - png
   * 
   * - jpg
   * 
   * - jpeg
   * 
   * - bmp
   * 
   * - gif
   * 
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
   * The identifier for the parser. Different parsers are suitable for different scenarios. For more information, refer to the knowledge base. Valid values:
   * 
   * - DOCMIND (intelligent document parsing)
   * 
   * - DOCMIND_DIGITAL (digital document parsing)
   * 
   * - DOCMIND_LLM_VERSION (LLM-based document parsing)
   * 
   * - DASH_QWEN_VL_PARSER (Qwen VL Parser)
   * 
   * This parameter is required.
   * 
   * @example
   * DOCMIND
   */
  parser?: string;
  /**
   * @remarks
   * The parser configuration. This parameter is required only when the `Parser` parameter is set to `DASH_QWEN_VL_PARSER`.
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

