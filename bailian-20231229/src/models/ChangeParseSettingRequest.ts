// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeParseSettingRequestParserConfig extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * Valid values:
   * 
   * *   qwen-vl-max
   * *   qwen-vl-plus
   * 
   * @example
   * qwen-vl-max
   */
  modelName?: string;
  /**
   * @remarks
   * The prompt used for parsing.
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
   * The category ID, which is the `CategoryId` returned by **AddCategory**. To view the category ID, click the ID icon next to the category name on the Unstructured Data tab of the [Application Data](https://bailian.console.alibabacloud.com/?tab=app#/data-center) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee35xxxxxxxx
   */
  categoryId?: string;
  /**
   * @remarks
   * The file type. Valid values: pdf, docx, and doc.
   * 
   * This parameter is required.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * The parser code. Valid values:
   * 
   * *   DOCMIND (Intelligent parsing)
   * *   DOCMIND_DIGITAL (Digital parsing)
   * *   DOCMIND_LLM_VERSION (LLM parsing)
   * *   DASH_QWEN_VL_PARSER (Qwen VL parsing)
   * 
   * This parameter is required.
   * 
   * @example
   * DOCMIND
   */
  parser?: string;
  /**
   * @remarks
   * The parser configuration. Currently, this is available only for Qwen VL parsing.
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

