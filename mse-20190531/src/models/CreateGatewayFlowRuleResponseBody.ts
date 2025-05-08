// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayFlowRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 608
   */
  data?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 72FC625E-9629-591B-9C01-3F0BFDAB****
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
      data: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

