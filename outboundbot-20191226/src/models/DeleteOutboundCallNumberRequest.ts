// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOutboundCallNumberRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * 33014787-cc13-49d3-ab2f-a98aa8f15fbb
   */
  instanceId?: string;
  /**
   * @remarks
   * Number ID
   * 
   * This parameter is required.
   * 
   * @example
   * ffa367e0-58f3-43b6-9615-c63db99c5add
   */
  outboundCallNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      outboundCallNumberId: 'OutboundCallNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      outboundCallNumberId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

