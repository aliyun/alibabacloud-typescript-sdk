// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderDetailV2ResponseBodyModule } from "./FlightOrderDetailV2responseBodyModule";


export class FlightOrderDetailV2ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module
   */
  module?: FlightOrderDetailV2ResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * E5F4ACF5-5677-1515-9999-ABBB5E668032
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 210bc60a16917251281873772dac41
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
      module: FlightOrderDetailV2ResponseBodyModule,
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

