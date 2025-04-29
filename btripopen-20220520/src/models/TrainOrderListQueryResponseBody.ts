// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderListQueryResponseBodyModule } from "./TrainOrderListQueryResponseBodyModule";
import { TrainOrderListQueryResponseBodyPageInfo } from "./TrainOrderListQueryResponseBodyPageInfo";


export class TrainOrderListQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: TrainOrderListQueryResponseBodyModule[];
  pageInfo?: TrainOrderListQueryResponseBodyPageInfo;
  /**
   * @example
   * F93C3EBD-17BE-5FE6-BF06-96A6F1AC8DC5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      pageInfo: 'page_info',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': TrainOrderListQueryResponseBodyModule },
      pageInfo: TrainOrderListQueryResponseBodyPageInfo,
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

