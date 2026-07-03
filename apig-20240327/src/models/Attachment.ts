// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Attachment extends $dara.Model {
  /**
   * @remarks
   * attachResourceId
   * 
   * @example
   * gw-xxx
   */
  attachResourceId?: string;
  /**
   * @remarks
   * The list of mounted resource IDs.
   */
  attachResourceIds?: string[];
  /**
   * @remarks
   * The list of parent IDs of the mounted resource.
   */
  attachResourceParentIds?: string[];
  /**
   * @remarks
   * The type of mount point supported by the policy. Valid values:
   * 
   * - HttpApi: HttpApi.
   * - Operation: Operation of HttpApi.
   * - GatewayRoute: gateway route.
   * - GatewayService: gateway service.
   * - GatewayServicePort: gateway service port.
   * - Domain: gateway domain name.
   * - Gateway: gateway.
   * 
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The environment to which the mounted resource belongs. If the environment ID is *, the mounted resource of the policy is not associated with any environment.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @remarks
   * The gateway to which the mounted resource belongs.
   * 
   * @example
   * gw-cpr4f9dlhtgq5ksfgmb0
   */
  gatewayId?: string;
  /**
   * @remarks
   * The policy mount ID.
   * 
   * @example
   * pr-cq7l5s5lhtgi6qasrdc0
   */
  policyAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceId: 'attachResourceId',
      attachResourceIds: 'attachResourceIds',
      attachResourceParentIds: 'attachResourceParentIds',
      attachResourceType: 'attachResourceType',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      policyAttachmentId: 'policyAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceId: 'string',
      attachResourceIds: { 'type': 'array', 'itemType': 'string' },
      attachResourceParentIds: { 'type': 'array', 'itemType': 'string' },
      attachResourceType: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      policyAttachmentId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachResourceIds)) {
      $dara.Model.validateArray(this.attachResourceIds);
    }
    if(Array.isArray(this.attachResourceParentIds)) {
      $dara.Model.validateArray(this.attachResourceParentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

