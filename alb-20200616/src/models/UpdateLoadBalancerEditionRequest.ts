// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerEditionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value from your client and make sure that the value is unique across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * 
   * - **true**: performs a dry run and does not modify the application load balancing edition. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, the system returns an error. If the request passes the dry run, the system returns the `DryRunOperation` error code.
   * 
   * - **false** (default): sends a normal request. If the request passes the dry run, the system returns an `HTTP_2xx` status code and modifies the edition.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The edition of the application load balancing. Different editions have different feature limits and billing policy.
   * 
   * - **Basic**: Basic Edition.
   * 
   * - **Standard**: Standard Edition.
   * 
   * - **StandardWithWaf**: WAF-enhanced Edition.
   * 
   * This parameter is required.
   * 
   * @example
   * Standard
   */
  loadBalancerEdition?: string;
  /**
   * @remarks
   * The application load balancing instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-bp1b6c719dfa08ex****
   */
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerEdition: 'LoadBalancerEdition',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerEdition: 'string',
      loadBalancerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

