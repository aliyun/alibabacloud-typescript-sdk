// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **client token** can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the value of **RequestId** as the value of **ClientToken**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aekzrnd67gq****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the region where the GA instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the GA resource.
   * 
   * *   If you set **ResourceType** to **accelerator**, set the value of ResourceId to the ID of a standard GA instance.
   * *   If you set **ResourceType** to **basicaccelerator**, set the value of ResourceId to the ID of a basic GA instance.
   * *   If you set **ResourceType** to **bandwidthpackage**, set the value of ResourceId to the ID of a bandwidth plan.
   * *   If you set **ResourceType** to **acl**, set the value of ResourceId to the ID of an access control list (ACL).
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp149u6o36qt1as9b****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the GA resource. Valid values:
   * 
   * *   **accelerator:** a standard GA instance.
   * *   **basicaccelerator:** a basic GA instance.
   * *   **bandwidthpackage:** a bandwidth plan.
   * *   **acl:** an ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * accelerator
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

