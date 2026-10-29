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
   * The client token that is used to ensure the idempotence of the request. This prevents duplicate operations caused by multiple retries.
   * - Generate the value from your client and ensure that it is unique among different requests. The client token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * - If you resubmit a request with a used client token and all other request parameters remain unchanged, the client receives the same response as the first request, and the server state remains unaffected.
   * 
   * - You can retry the request when the operation times out or the error code is PROCESSING, and the idempotence remains valid. If the HTTP status code 200 is returned, the client receives the same response after a retry, and the server state remains unaffected. If an HTTP 4xx status code is returned and the error code is not PROCESSING, the idempotence is invalid.
   * - The client token is valid for 10 minutes.
   * 
   * @example
   * 26C28756-2586-17AF-B802-0DC50D8FDEBB
   */
  clientToken?: string;
  /**
   * @remarks
   * The ENS edge zone ID. Not all ENS edge zones support creating an Edge Load Balancer (ELB) instance. Before calling this operation, verify that the target edge zone supports this feature.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The name of the load balancing instance. The name must be 1 to 80 characters in length, and can contain English letters and Chinese characters. If you do not specify this parameter, the system randomly allocates a name to the instance.
   * 
   * > The name cannot start with http:// or https://.
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
   * The type of the edge load balancing (ELB) instance. Valid values:
   * - CLB: traditional load balancing instance.
   * - InternetDR: public pattern load balancing instance.
   * 
   * @example
   * CLB
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The network ID of the edge load balancing (ELB) instance to be created.
   * 
   * This parameter is required.
   * 
   * @example
   * n-5sax03dh2eyagujgsn7z9****
   */
  networkId?: string;
  /**
   * @remarks
   * The billing method. Currently, only PostPaid (pay-as-you-go) is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the VPC-connected instance belongs.
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

