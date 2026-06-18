// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParseSettingsResponseBodyDataParserConfig extends $dara.Model {
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
   * The prompt used for parsing.
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

export class GetParseSettingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The file type. Valid values are: pdf, docx, doc, etc. All supported file types in the category are listed here.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * The parser used for files of the current type. Valid values:
   * 
   * *   DOCMIND (Intelligent parsing)
   * *   DOCMIND_DIGITAL (Digital parsing)
   * *   DOCMIND_LLM_VERSION (LLM parsing)
   * *   DASH_QWEN_VL_PARSER (Qwen VL parsing)
   * 
   * @example
   * DOCMIND
   */
  parser?: string;
  /**
   * @remarks
   * The parser configuration. Currently, this is available only for Qwen VL parsing.
   */
  parserConfig?: GetParseSettingsResponseBodyDataParserConfig;
  /**
   * @remarks
   * The display name of the parsing method.
   * 
   * @example
   * 电子文档解析
   */
  parserDisplayName?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      parser: 'Parser',
      parserConfig: 'ParserConfig',
      parserDisplayName: 'ParserDisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      parser: 'string',
      parserConfig: GetParseSettingsResponseBodyDataParserConfig,
      parserDisplayName: 'string',
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

export class GetParseSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The returned data fields.
   */
  data?: GetParseSettingsResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * workspace id is null or invalid.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 35A267BF-xxxx-54DB-8394-AA3B0742D833
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetParseSettingsResponseBodyData },
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

