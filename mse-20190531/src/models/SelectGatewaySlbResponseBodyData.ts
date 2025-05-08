// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectGatewaySlbResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * @example
   * lb-bp14lqiw5n96hq2****
   */
  slbId?: string;
  /**
   * @remarks
   * The name of the SLB instance.
   * 
   * @example
   * MseGatewaySlb-gw
   */
  slbName?: string;
  static names(): { [key: string]: string } {
    return {
      slbId: 'SlbId',
      slbName: 'SlbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbId: 'string',
      slbName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

