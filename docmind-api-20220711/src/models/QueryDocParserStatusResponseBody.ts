// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDocParserStatusResponseBodyData extends $dara.Model {
  imageCount?: number;
  numberOfSuccessfulParsing?: number;
  pageCountEstimate?: number;
  paragraphCount?: number;
  processing?: number;
  status?: string;
  tableCount?: number;
  tokens?: number;
  static names(): { [key: string]: string } {
    return {
      imageCount: 'ImageCount',
      numberOfSuccessfulParsing: 'NumberOfSuccessfulParsing',
      pageCountEstimate: 'PageCountEstimate',
      paragraphCount: 'ParagraphCount',
      processing: 'Processing',
      status: 'Status',
      tableCount: 'TableCount',
      tokens: 'Tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCount: 'number',
      numberOfSuccessfulParsing: 'number',
      pageCountEstimate: 'number',
      paragraphCount: 'number',
      processing: 'number',
      status: 'string',
      tableCount: 'number',
      tokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocParserStatusResponseBody extends $dara.Model {
  /**
   * @example
   * noPermission
   */
  code?: string;
  data?: QueryDocParserStatusResponseBodyData;
  /**
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryDocParserStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
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

