// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDocParserStatusResponseBodyDataOutputFormatResultPages extends $dara.Model {
  imageHeight?: number;
  imageUrl?: string;
  imageWidth?: number;
  pageIdAllDocs?: number;
  pageIdCurDoc?: number;
  static names(): { [key: string]: string } {
    return {
      imageHeight: 'ImageHeight',
      imageUrl: 'ImageUrl',
      imageWidth: 'ImageWidth',
      pageIdAllDocs: 'PageIdAllDocs',
      pageIdCurDoc: 'PageIdCurDoc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageHeight: 'number',
      imageUrl: 'string',
      imageWidth: 'number',
      pageIdAllDocs: 'number',
      pageIdCurDoc: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocParserStatusResponseBodyDataOutputFormatResult extends $dara.Model {
  outputFileUrl?: string;
  outputType?: string;
  pages?: QueryDocParserStatusResponseBodyDataOutputFormatResultPages[];
  static names(): { [key: string]: string } {
    return {
      outputFileUrl: 'OutputFileUrl',
      outputType: 'OutputType',
      pages: 'Pages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputFileUrl: 'string',
      outputType: 'string',
      pages: { 'type': 'array', 'itemType': QueryDocParserStatusResponseBodyDataOutputFormatResultPages },
    };
  }

  validate() {
    if(Array.isArray(this.pages)) {
      $dara.Model.validateArray(this.pages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDocParserStatusResponseBodyData extends $dara.Model {
  imageCount?: number;
  numberOfSuccessfulParsing?: number;
  outputFormatResult?: QueryDocParserStatusResponseBodyDataOutputFormatResult[];
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
      outputFormatResult: 'OutputFormatResult',
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
      outputFormatResult: { 'type': 'array', 'itemType': QueryDocParserStatusResponseBodyDataOutputFormatResult },
      pageCountEstimate: 'number',
      paragraphCount: 'number',
      processing: 'number',
      status: 'string',
      tableCount: 'number',
      tokens: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.outputFormatResult)) {
      $dara.Model.validateArray(this.outputFormatResult);
    }
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

