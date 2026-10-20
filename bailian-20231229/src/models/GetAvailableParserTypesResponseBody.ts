// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAvailableParserTypesResponseBodyDataParserList extends $dara.Model {
  /**
   * @remarks
   * The display name of the parsing method.
   * 
   * @example
   * Intelligent Document Parsing
   */
  displayName?: string;
  /**
   * @remarks
   * The parser code. Valid values:
   * - DOCMIND: Intelligent Document Parsing.
   * - DOCMIND_DIGITAL: Electronic Document Parsing.
   * - DOCMIND_LLM_VERSION: LLM-based Document Parsing.
   * - DASH_QWEN_VL_PARSER: Qwen-VL Parsing.
   * 
   * @example
   * DOCMIND
   */
  parser?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      parser: 'Parser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      parser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvailableParserTypesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The file type, which is the same as the FileType input parameter.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * The list of parsers supported for the specified file type.
   */
  parserList?: GetAvailableParserTypesResponseBodyDataParserList[];
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      parserList: 'ParserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      parserList: { 'type': 'array', 'itemType': GetAvailableParserTypesResponseBodyDataParserList },
    };
  }

  validate() {
    if(Array.isArray(this.parserList)) {
      $dara.Model.validateArray(this.parserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvailableParserTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * DataCenter.Throttling
   */
  code?: string;
  /**
   * @remarks
   * The business data returned upon a successful request.
   */
  data?: GetAvailableParserTypesResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * User not authorized to operate on the specified resource
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-7734-4F9A-8464-2446XXXXXXX
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
   * true
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
      data: GetAvailableParserTypesResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

