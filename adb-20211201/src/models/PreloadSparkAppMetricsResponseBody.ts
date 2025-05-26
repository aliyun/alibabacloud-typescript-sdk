// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreloadSparkAppMetricsResponseBodyData } from "./PreloadSparkAppMetricsResponseBodyData";


export class PreloadSparkAppMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: PreloadSparkAppMetricsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 84489769-3065-5A28-A4CB-977CD426F1C3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: PreloadSparkAppMetricsResponseBodyData,
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

