// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderListQueryV2ResponseBodyModule } from "./FlightOrderListQueryV2responseBodyModule";
import { FlightOrderListQueryV2ResponseBodyPageInfo } from "./FlightOrderListQueryV2responseBodyPageInfo";


export class FlightOrderListQueryV2ResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  message?: string;
  module?: FlightOrderListQueryV2ResponseBodyModule[];
  pageInfo?: FlightOrderListQueryV2ResponseBodyPageInfo;
  /**
   * @example
   * C61ECFF6-****-****-****-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce********056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      pageInfo: 'pageInfo',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModule },
      pageInfo: FlightOrderListQueryV2ResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

