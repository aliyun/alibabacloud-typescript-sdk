// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitiatePptCreationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * AppKey
   * 
   * @example
   * S1X5ecouBztZelaQ
   */
  appKey?: string;
  /**
   * @remarks
   * Code
   * 
   * @example
   * 7dhqd2
   */
  code?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      code: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitiatePptCreationResponseBody extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: InitiatePptCreationResponseBodyData;
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @example
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 11AC01F1-88FB-5C4D-B6F5-E8BB136CD5A3
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InitiatePptCreationResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
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

