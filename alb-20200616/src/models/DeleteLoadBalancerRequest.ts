// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLoadBalancerRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate a parameter value from your client to ensure that the value is unique among different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only perform a dry run on the request. Valid values:
   * 
   * - **true**: performs a dry run on the request and does not delete the application load balancing instance. The system checks whether required parameters are specified, the request format, and service limits. If the request fails the dry run, the corresponding error is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a Normal request. If the request passes the dry run, the `HTTP 2xx` status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The application load balancing instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-o9ulmq5hgn68jk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The type of resources that are of automatic creation and attach by application load balancing and need to be retained. When you release an Internet-facing application load balancing instance, you can configure the Settings to eip to retain the EIP that is of automatic creation and attach by application load balancing. Anycast EIPs are not supported for retention, and EIPs that users manually attach are automatically retained.
   */
  retainResourceType?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      retainResourceType: 'RetainResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      retainResourceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.retainResourceType)) {
      $dara.Model.validateArray(this.retainResourceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

