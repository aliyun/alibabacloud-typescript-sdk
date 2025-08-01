// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstantScoreResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  error?: number;
  /**
   * @example
   * 100
   */
  latency?: number;
  /**
   * @example
   * 100
   */
  load?: number;
  /**
   * @example
   * 100
   */
  saturation?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      error: 'error',
      latency: 'latency',
      load: 'load',
      saturation: 'saturation',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'number',
      latency: 'number',
      load: 'number',
      saturation: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstantScoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * 集群ID
   * 
   * @example
   * Success
   */
  code?: string;
  data?: GetInstantScoreResponseBodyData;
  /**
   * @example
   * Query no data
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
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
      data: GetInstantScoreResponseBodyData,
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

