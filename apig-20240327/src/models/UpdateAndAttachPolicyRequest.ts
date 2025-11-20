// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAndAttachPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The association IDs.
   * 
   * This parameter is required.
   */
  attachResourceIds?: string[];
  /**
   * @remarks
   * The supported associated resource type. Valid values:
   * 
   * *   HttpApi: an HTTP API
   * *   Operation: an operation in an HTTP API
   * *   GatewayRoute: a route
   * *   GatewayService: a service
   * *   GatewayServicePort: a service port
   * *   Domain: a domain name
   * *   Gateway: an instance
   * 
   * This parameter is required.
   * 
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The policy configurations. The value is a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"enable\\":false}
   */
  config?: string;
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * This is the description.
   */
  description?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cq2avtllhtgja4dk5djg
   */
  environmentId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gw-cq2avtllhtgja4dk5djg
   */
  gatewayId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceIds: 'attachResourceIds',
      attachResourceType: 'attachResourceType',
      config: 'config',
      description: 'description',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceIds: { 'type': 'array', 'itemType': 'string' },
      attachResourceType: 'string',
      config: 'string',
      description: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      name: 'string',
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

