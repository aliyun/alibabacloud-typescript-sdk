// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerRequest extends $dara.Model {
  /**
   * @remarks
   * The billing cycle of the ELB instance.
   * 
   * @example
   * Hour
   */
  billingCycle?: string;
  /**
   * @remarks
   * Ensures the idempotency of the request to avoid duplicate operations caused by multiple retries.
   * - Generate a parameter value from your client and ensure that the value is unique across different requests. The ClientToken value supports only ASCII characters and cannot exceed 64 characters in length.
   * 
   * - If you use a ClientToken that has been used before and the other request parameters remain unchanged, the client receives the same result as the first submission, with no impact on your server-side state.
   * 
   * - You can retry when the API times out or returns the PROCESSING error code, and idempotency takes effect. If the return result is an HTTP 200 status code, the retry returns the same result as the previous call with no impact on your server-side state. If the return result is an HTTP 4xx status code and the error code is not PROCESSING, idempotency does not take effect.
   * - The ClientToken is valid for 10 minutes.
   * 
   * @example
   * 26C28756-2586-17AF-B802-0DC50D8FDEBB
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the ENS edge zone.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The name of the load balancing instance. The name must be 1 to 80 characters in length and can contain letters and Chinese characters. If you do not specify this parameter, the system automatically assigns an instance name.
   * 
   * > The name cannot start with `http://` or `https://`.
   * 
   * @example
   * gcs-pre-websocket-eslb-telecom
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The specification of the load balancing instance.
   * 
   * This parameter is required.
   * 
   * @example
   * elb.s2.medium
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * The type of the Edge Load Balancing instance.
   * 
   * - CLB: Classic Load Balancing instance.
   * - InternetDR: Public pattern load balancing instance.
   * 
   * @example
   * CLB
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The network ID of the Edge Load Balancing (ELB) instance to create.
   * 
   * This parameter is required.
   * 
   * @example
   * n-5sax03dh2eyagujgsn7z9****
   */
  networkId?: string;
  /**
   * @remarks
   * The billing type. PostPaid (currently the only supported type): pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the VPC instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-5s78haoys9oylle6ln71m****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      clientToken: 'ClientToken',
      ensRegionId: 'EnsRegionId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      loadBalancerType: 'LoadBalancerType',
      networkId: 'NetworkId',
      payType: 'PayType',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      clientToken: 'string',
      ensRegionId: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      loadBalancerType: 'string',
      networkId: 'string',
      payType: 'string',
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

