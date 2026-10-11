// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resources. Valid values:
   * 
   * - **true**: Removes all tags from the resources.
   * - **false** (default): Does not remove all tags from the resources.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the client token on the client side. Make sure that the client token is unique across different requests. The client token can only contain ASCII characters.
   * 
   * > Note: If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request is different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run. The system checks the request without removing the resource tags. Check items include whether required parameters are specified, the request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned.
   * 
   * - **false** (default): Performs a normal request. If the check succeeds, an HTTP 2xx status code is returned and the operation is directly executed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The list of resource IDs. You can specify up to 50 resource IDs in a single call.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - **EgressProxyGateway**: egress proxy gateway instance
   * - **EgressProxyIpPool**: egress proxy IP address pool
   * - **EgressProxyConfiguration**: egress proxy configuration
   * - **EgressProxyRuleGroup**: egress proxy rule group
   * 
   * This parameter is required.
   * 
   * @example
   * EgressProxyGateway
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys to remove. You can remove up to 20 tags in a single call.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

