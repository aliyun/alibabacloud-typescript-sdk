// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token. Ensure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system uses the **request ID** as the **client token**. The **request ID** is different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of new connections per second in each zone supported by the NLB instance (virtual IP address). Valid values: **1** to **1000000**.
   * 
   * @example
   * 1
   */
  cps?: number;
  /**
   * @remarks
   * Specifies whether to enable cross-zone load balancing for the NLB instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  crossZoneEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without sending the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and sends the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The NLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-wb7r6dlwetvt5j****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The NLB instance name.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * NLB1
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      cps: 'Cps',
      crossZoneEnabled: 'CrossZoneEnabled',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      cps: 'number',
      crossZoneEnabled: 'boolean',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
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

