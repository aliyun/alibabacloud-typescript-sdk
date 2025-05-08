// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateGatewayIsolationRuleResponseBodyData } from "./UpdateGatewayIsolationRuleResponseBodyData";


export class UpdateGatewayIsolationRuleResponseBody extends $dara.Model {
  data?: UpdateGatewayIsolationRuleResponseBodyData;
  /**
   * @example
   * 94B12406-E44D-57C9-BF93-A8B35BFF****
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
      data: UpdateGatewayIsolationRuleResponseBodyData,
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

