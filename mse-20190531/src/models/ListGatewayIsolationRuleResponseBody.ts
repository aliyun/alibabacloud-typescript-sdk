// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayIsolationRuleResponseBodyData } from "./ListGatewayIsolationRuleResponseBodyData";


export class ListGatewayIsolationRuleResponseBody extends $dara.Model {
  data?: ListGatewayIsolationRuleResponseBodyData;
  /**
   * @example
   * 6F025D43-8632-5716-AE9B-7EDDF16C****
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
      data: ListGatewayIsolationRuleResponseBodyData,
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

