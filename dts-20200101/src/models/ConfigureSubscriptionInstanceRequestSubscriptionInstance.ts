// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSubscriptionInstanceRequestSubscriptionInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the VPC in which the change tracking instance is deployed.
   * 
   * > This parameter is available and required only if the **SubscriptionInstanceNetworkType** parameter is set to **vpc**.
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the specified VPC.
   * 
   * > This parameter is available and required only if the **SubscriptionInstanceNetworkType** parameter is set to **vpc**.
   * 
   * @example
   * vsw-bp10df3mxae6lpmku****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VPCId: 'string',
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

