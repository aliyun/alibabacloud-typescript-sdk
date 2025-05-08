// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. This prevents repeated operations caused by multiple retries.
   * 
   * *   You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length.
   * *   If you retry an API request with the same client token and request parameters after it has completed successfully, the result of the original request is returned. The server status does not change.
   * *   You can initiate a retry when the operation times out or the error code is PROCESSING. The idempotence is valid. If HTTP status code 200 is returned, the client receives the same result as the last request. However, your server status is not affected. If HTTP status code 4xx is returned and error code is not PROCESSING, the idempotence is invalid.
   * *   A client token is valid for 10 minutes.
   * 
   * @example
   * 26C28756-2586-17AF-B802-0DC50D8FDEBB
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the Edge Node Service (ENS) node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The name of the ELB instance. The name must be 1 to 80 characters in length. If you leave this parameter empty, the system randomly allocates a name as the value of this parameter.
   * 
   * >  The value cannot start with `http://` or `https://`.
   * 
   * @example
   * gcs-pre-websocket-eslb-telecom
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The specification of the ELB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * elb.s2.medium
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * The network ID of the created ELB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * n-5sax03dh2eyagujgsn7z9****
   */
  networkId?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid value: PostPaid. PostPaid specifies the pay-as-you-go billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the internal-facing ELB instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-5s78haoys9oylle6ln71m****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ensRegionId: 'EnsRegionId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      networkId: 'NetworkId',
      payType: 'PayType',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ensRegionId: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
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

