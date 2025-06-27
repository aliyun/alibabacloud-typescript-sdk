// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNisNetworkMetricsResponseBodyData } from "./GetNisNetworkMetricsResponseBodyData";


export class GetNisNetworkMetricsResponseBody extends $dara.Model {
  data?: GetNisNetworkMetricsResponseBodyData;
  /**
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
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
      data: GetNisNetworkMetricsResponseBodyData,
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

