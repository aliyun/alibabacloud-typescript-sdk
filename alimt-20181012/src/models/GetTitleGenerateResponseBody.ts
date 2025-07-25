// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTitleGenerateResponseBodyData extends $dara.Model {
  /**
   * @example
   * 10pcs 80ml Kitchen Disposable Plastic Sauce Cup Pot Chutney Container
   */
  titles?: string;
  static names(): { [key: string]: string } {
    return {
      titles: 'Titles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      titles: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTitleGenerateResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetTitleGenerateResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * DC2DCCC9-C3DF-4F59-8D8E-78185729F16D
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
      data: GetTitleGenerateResponseBodyData,
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

