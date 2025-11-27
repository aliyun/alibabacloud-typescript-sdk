// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class SubmitDocParserJobAdvanceRequestCustomOssConfig extends $dara.Model {
  /**
   * @example
   * AccessId
   */
  accessId?: string;
  /**
   * @example
   * AccessKeySecret
   */
  accessKeySecret?: string;
  /**
   * @example
   * StsToken
   */
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accessKeySecret: 'AccessKeySecret',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessKeySecret: 'string',
      stsToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocParserJobAdvanceRequestLLMParam extends $dara.Model {
  /**
   * @example
   * qwen-vl-ocr-latest
   */
  model?: string;
  /**
   * @example
   * Read all the text from the image.
   */
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      prompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocParserJobAdvanceRequestMultimediaParameters extends $dara.Model {
  enableSynopsisParse?: boolean;
  vlParsePrompt?: string;
  static names(): { [key: string]: string } {
    return {
      enableSynopsisParse: 'EnableSynopsisParse',
      vlParsePrompt: 'VlParsePrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSynopsisParse: 'boolean',
      vlParsePrompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitDocParserJobAdvanceRequest extends $dara.Model {
  customOssConfig?: SubmitDocParserJobAdvanceRequestCustomOssConfig;
  enableEventCallback?: boolean;
  enhancementMode?: string;
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
  fileUrlObject?: Readable;
  formulaEnhancement?: boolean;
  LLMParam?: SubmitDocParserJobAdvanceRequestLLMParam;
  llmEnhancement?: boolean;
  multimediaParameters?: SubmitDocParserJobAdvanceRequestMultimediaParameters;
  needHeaderFooter?: boolean;
  option?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  outputHtmlTable?: boolean;
  pageIndex?: string;
  static names(): { [key: string]: string } {
    return {
      customOssConfig: 'CustomOssConfig',
      enableEventCallback: 'EnableEventCallback',
      enhancementMode: 'EnhancementMode',
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      formulaEnhancement: 'FormulaEnhancement',
      LLMParam: 'LLMParam',
      llmEnhancement: 'LlmEnhancement',
      multimediaParameters: 'MultimediaParameters',
      needHeaderFooter: 'NeedHeaderFooter',
      option: 'Option',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      outputHtmlTable: 'OutputHtmlTable',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customOssConfig: SubmitDocParserJobAdvanceRequestCustomOssConfig,
      enableEventCallback: 'boolean',
      enhancementMode: 'string',
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      formulaEnhancement: 'boolean',
      LLMParam: SubmitDocParserJobAdvanceRequestLLMParam,
      llmEnhancement: 'boolean',
      multimediaParameters: SubmitDocParserJobAdvanceRequestMultimediaParameters,
      needHeaderFooter: 'boolean',
      option: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      outputHtmlTable: 'boolean',
      pageIndex: 'string',
    };
  }

  validate() {
    if(this.customOssConfig && typeof (this.customOssConfig as any).validate === 'function') {
      (this.customOssConfig as any).validate();
    }
    if(this.LLMParam && typeof (this.LLMParam as any).validate === 'function') {
      (this.LLMParam as any).validate();
    }
    if(this.multimediaParameters && typeof (this.multimediaParameters as any).validate === 'function') {
      (this.multimediaParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

