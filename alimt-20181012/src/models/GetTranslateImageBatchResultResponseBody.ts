// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranslateImageBatchResultResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * https://example.com/example.jpg
   */
  finalImageUrl?: string;
  /**
   * @example
   * https://example.com/example.jpg
   */
  inPaintingUrl?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * https://example.com/example.jpg
   */
  sourceImageUrl?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * {"TemplateJson": "Editor Template Json String	"}
   */
  templateJson?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      finalImageUrl: 'FinalImageUrl',
      inPaintingUrl: 'InPaintingUrl',
      message: 'Message',
      sourceImageUrl: 'SourceImageUrl',
      success: 'Success',
      templateJson: 'TemplateJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      finalImageUrl: 'string',
      inPaintingUrl: 'string',
      message: 'string',
      sourceImageUrl: 'string',
      success: 'boolean',
      templateJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranslateImageBatchResultResponseBodyData extends $dara.Model {
  result?: GetTranslateImageBatchResultResponseBodyDataResult[];
  /**
   * @example
   * finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetTranslateImageBatchResultResponseBodyDataResult },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranslateImageBatchResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetTranslateImageBatchResultResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * DACD263C-C068-5116-83EC-117245AA35CF
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
      code: 'number',
      data: GetTranslateImageBatchResultResponseBodyData,
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

