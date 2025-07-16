// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateImageResponseBodyData extends $dara.Model {
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
   * Editor Template Json String
   */
  templateJson?: string;
  static names(): { [key: string]: string } {
    return {
      finalImageUrl: 'FinalImageUrl',
      inPaintingUrl: 'InPaintingUrl',
      templateJson: 'TemplateJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalImageUrl: 'string',
      inPaintingUrl: 'string',
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

export class TranslateImageResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: TranslateImageResponseBodyData;
  /**
   * @example
   * Error Message
   */
  message?: string;
  /**
   * @example
   * D774D33D-F1CB-5A2C-A787-E0A2179239CE
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
      data: TranslateImageResponseBodyData,
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

