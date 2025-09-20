// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParseSettingsResponseBodyDataParserConfig extends $dara.Model {
  /**
   * @example
   * - qwen-vl-max
   * - qwen-vl-plus
   */
  modelName?: string;
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
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * DOCMIND
   */
  parser?: string;
  parserConfig?: GetParseSettingsResponseBodyDataParserConfig;
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
   * @example
   * success
   */
  code?: string;
  data?: GetParseSettingsResponseBodyData[];
  /**
   * @example
   * workspace id is null or invalid.
   */
  message?: string;
  /**
   * @example
   * 35A267BF-xxxx-54DB-8394-AA3B0742D833
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
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

