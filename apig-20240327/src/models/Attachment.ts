// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Attachment extends $dara.Model {
  /**
   * @remarks
   * The attachment point ID.
   */
  attachResourceId?: string;
  /**
   * @remarks
   * A list of attached resource IDs.
   */
  attachResourceIds?: string[];
  /**
   * @remarks
   * A list of parent resource IDs.
   */
  attachResourceParentIds?: string[];
  /**
   * @remarks
   * The supported attachment point types for the policy.
   * 
   * - `HttpApi`: An HTTP API.
   * 
   * - `Operation`: An operation of an HTTP API.
   * 
   * - `GatewayRoute`: A gateway route.
   * 
   * - `GatewayService`: A gateway service.
   * 
   * - `GatewayServicePort`: A gateway service port.
   * 
   * - `Domain`: A gateway domain.
   * 
   * - `Gateway`: A gateway.
   * 
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The ID of the environment for the attached resource. An asterisk (`*`) indicates that the policy attachment is not environment-specific.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @remarks
   * The ID of the gateway for the attached resource.
   * 
   * @example
   * gw-cpr4f9dlhtgq5ksfgmb0
   */
  gatewayId?: string;
  /**
   * @remarks
   * The policy attachment ID.
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

