// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployHttpApiResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * HTTP API ID。
   * 
   * @example
   * api-xxx
   */
  httpApiId?: string;
  static names(): { [key: string]: string } {
    return {
      httpApiId: 'httpApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpApiId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployHttpApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: DeployHttpApiResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C2D1C68-0D93-5561-8EE6-FDB7BF067A30
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeployHttpApiResponseBodyData,
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

