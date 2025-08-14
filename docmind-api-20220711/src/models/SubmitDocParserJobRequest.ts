// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDocParserJobRequest extends $dara.Model {
  /**
   * @example
   * docStructure.pdf
   */
  fileName?: string;
  /**
   * @example
   * pdf
   */
  fileNameExtension?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrl?: string;
  formulaEnhancement?: boolean;
  llmEnhancement?: boolean;
  option?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  outputHtmlTable?: boolean;
  pageIndex?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      formulaEnhancement: 'FormulaEnhancement',
      llmEnhancement: 'LlmEnhancement',
      option: 'Option',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      outputHtmlTable: 'OutputHtmlTable',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      formulaEnhancement: 'boolean',
      llmEnhancement: 'boolean',
      option: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      outputHtmlTable: 'boolean',
      pageIndex: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

