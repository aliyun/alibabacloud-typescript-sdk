// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * @example
   * lb-5s7crik3yo3bp03gqrbp5****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the ELB instance.
   * 
   * @example
   * gcs-pre-websocket-****
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-5sax03dh2eyagujgsn7z9****
   */
  networkId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1ECC937A-AE0E-4626-BE51-DED1D6D1C888
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the ELB instance belongs.
   * 
   * @example
   * vsw-5savh5ngxh8sbj14bu7n****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      networkId: 'NetworkId',
      requestId: 'RequestId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      networkId: 'string',
      requestId: 'string',
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

