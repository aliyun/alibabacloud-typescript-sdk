// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncreaseNodeGroupParam extends $dara.Model {
  nodeCount?: number;
  nodeGroupId?: string;
  paymentDuration?: number;
  paymentDurationUnit?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeCount: 'NodeCount',
      nodeGroupId: 'NodeGroupId',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCount: 'number',
      nodeGroupId: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

