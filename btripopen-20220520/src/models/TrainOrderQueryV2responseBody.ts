// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderQueryV2ResponseBodyModule } from "./TrainOrderQueryV2responseBodyModule";


export class TrainOrderQueryV2ResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  message?: string;
  module?: TrainOrderQueryV2ResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 1213ds1d
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 123412dcdsac sd
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: TrainOrderQueryV2ResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

