// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Attachment extends $dara.Model {
  /**
   * @remarks
   * The resource IDs.
   */
  attachResourceIds?: string[];
  /**
   * @remarks
   * The supported mount point type. Valid values:
   * 
   * *   HttpApi: an HTTP API
   * *   Operation: an operation in an HTTP API
   * *   GatewayRoute: a gateway route
   * *   GatewayService: a gateway service
   * *   GatewayServicePort: a gateway service port
   * *   Domain: a gateway domain name
   * *   Gateway: a gateway instance
   * 
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The environment to which the mounted resource belongs. If an asterisk (\\*) is returned as the environment ID, the mounted resource is not related to the environment.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @remarks
   * The instance to which the mounted resource belongs.
   * 
   * @example
   * gw-cpr4f9dlhtgq5ksfgmb0
   */
  gatewayId?: string;
  /**
   * @remarks
   * The mount ID.
   * 
   * @example
   * pr-cq7l5s5lhtgi6qasrdc0
   */
  policyAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceIds: 'attachResourceIds',
      attachResourceType: 'attachResourceType',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      policyAttachmentId: 'policyAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceIds: { 'type': 'array', 'itemType': 'string' },
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

