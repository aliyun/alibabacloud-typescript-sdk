// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelTypeDetermineResponseBodyData extends $dara.Model {
  /**
   * @example
   * false
   */
  followUp?: boolean;
  rewriteText?: string;
  /**
   * @example
   * true
   */
  vl?: boolean;
  static names(): { [key: string]: string } {
    return {
      followUp: 'followUp',
      rewriteText: 'rewriteText',
      vl: 'vl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      followUp: 'boolean',
      rewriteText: 'string',
      vl: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelTypeDetermineResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: ModelTypeDetermineResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7B0FC4BC-9E4B-5AD7-9D35-6559BDC0788E
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ModelTypeDetermineResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

