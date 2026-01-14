// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomRoutingEndPointTrafficPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the traffic policy to be queried.
   * 
   * @example
   * ep-bp1d2utp8qqe2a44t****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator (GA) instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * ply-bptest2****
   */
  policyId?: string;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **DescribeCustomRoutingEndPointTrafficPolicy**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

