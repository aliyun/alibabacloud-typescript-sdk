// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAvailableParserTypesResponseBodyDataParserList extends $dara.Model {
  displayName?: string;
  /**
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
   * @example
   * pdf
   */
  fileType?: string;
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
   * @example
   * DataCenter.Throttling
   */
  code?: string;
  data?: GetAvailableParserTypesResponseBodyData;
  /**
   * @example
   * User not authorized to operate on the specified resource
   */
  message?: string;
  /**
   * @example
   * 17204B98-7734-4F9A-8464-2446XXXXXXX
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  status?: string;
  /**
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

