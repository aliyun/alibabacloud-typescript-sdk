// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExtractFingerPrintResponseBodyData extends $dara.Model {
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAAAQABAAD****
   */
  fingerPrint?: string;
  static names(): { [key: string]: string } {
    return {
      fingerPrint: 'FingerPrint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerPrint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractFingerPrintResponseBody extends $dara.Model {
  data?: ExtractFingerPrintResponseBodyData;
  /**
   * @example
   * D21978CC-C1E7-4A7A-A1B2-D5896BDC7ADF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ExtractFingerPrintResponseBodyData,
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

