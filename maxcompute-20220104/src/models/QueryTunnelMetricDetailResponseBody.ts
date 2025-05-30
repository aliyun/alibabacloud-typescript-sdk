// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTunnelMetricDetailResponseBodyData } from "./QueryTunnelMetricDetailResponseBodyData";


export class QueryTunnelMetricDetailResponseBody extends $dara.Model {
  data?: QueryTunnelMetricDetailResponseBodyData;
  /**
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @example
   * plan \\"***\\" does not exist
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * 0a06dd4516687375802853481ec9fd
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryTunnelMetricDetailResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
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

