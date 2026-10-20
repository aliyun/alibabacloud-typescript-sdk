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
   * The file type, specified as a file extension. Valid values include pdf, docx, and doc. All file types supported in the current category are listed.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * The parser used to parse files of the current type under this category. Valid values:
   * - DOCMIND: Intelligent Document Parsing.
   * - DOCMIND_DIGITAL: Electronic Document Parsing.
   * - DOCMIND_LLM_VERSION: LLM-based Document Parsing.
   * - DASH_QWEN_VL_PARSER: Qwen VL Parsing.
   * 
   * @example
   * DOCMIND
   */
  parser?: string;
  /**
   * @remarks
   * The parser configuration. This parameter is returned only when the type is set to Qwen VL parsing.
   */
  parserConfig?: GetParseSettingsResponseBodyDataParserConfig;
  /**
   * @remarks
   * The display name of the parsing method.
   * 
   * @example
   * Electronic Document Parsing
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
   * The error code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The business data returned when the request is successful.
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
   * The status code returned by the operation.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
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

