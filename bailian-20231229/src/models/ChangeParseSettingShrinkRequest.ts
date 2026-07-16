// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeParseSettingShrinkRequest extends $dara.Model {
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
   * - DOCMIND (Intelligent Document Parsing)
   * - DOCMIND_DIGITAL (Electronic Document Parsing)
   * - DOCMIND_LLM_VERSION (Large Model Document Parsing)
   * - DASH_QWEN_VL_PARSER (Qwen VL Parsing)
   * - DOCMIND_LLM_VERSION_MEDIA (Audio/Video Parsing)
   * 
   * This parameter is required.
   * 
   * @example
   * DOCMIND
   */
  parser?: string;
  /**
   * @remarks
   * The parser configuration. This parameter is required only when the parser is set to Qwen VL Parsing.
   */
  parserConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      fileType: 'FileType',
      parser: 'Parser',
      parserConfigShrink: 'ParserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      fileType: 'string',
      parser: 'string',
      parserConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

