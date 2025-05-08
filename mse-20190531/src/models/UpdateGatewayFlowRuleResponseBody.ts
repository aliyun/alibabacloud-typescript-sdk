// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateGatewayFlowRuleResponseBodyData } from "./UpdateGatewayFlowRuleResponseBodyData";


export class UpdateGatewayFlowRuleResponseBody extends $dara.Model {
  data?: UpdateGatewayFlowRuleResponseBodyData;
  /**
   * @example
   * 2B74E7F7-DF54-5AB1-B8F2-67391B83****
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
      data: UpdateGatewayFlowRuleResponseBodyData,
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

