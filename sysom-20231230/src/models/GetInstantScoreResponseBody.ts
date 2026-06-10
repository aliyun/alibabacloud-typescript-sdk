// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstantScoreResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Error score
   * 
   * @example
   * 100
   */
  error?: number;
  /**
   * @remarks
   * Latency score
   * 
   * @example
   * 100
   */
  latency?: number;
  /**
   * @remarks
   * Load score
   * 
   * @example
   * 100
   */
  load?: number;
  /**
   * @remarks
   * Saturation score
   * 
   * @example
   * 100
   */
  saturation?: number;
  /**
   * @remarks
   * Total score
   * 
   * @example
   * 100
   */
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
   * Status code  
   * - If `code == Success`, authorization succeeded.  
   * - Other status codes indicate authorization failed. When authorization fails, view the `message` field to obtain detailed error message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetInstantScoreResponseBodyData;
  /**
   * @remarks
   * Error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
   * 
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

