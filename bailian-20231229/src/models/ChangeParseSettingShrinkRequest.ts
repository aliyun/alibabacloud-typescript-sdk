// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeParseSettingShrinkRequest extends $dara.Model {
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

