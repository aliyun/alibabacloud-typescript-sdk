// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of a request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
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
   * The region ID of the Alibaba Cloud Global Accelerator (GA) instance. Set the value to **ap-southeast-1**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the Global Accelerator resource for which you want to modify the resource group.
   * - If **ResourceType** is set to **accelerator**, set this parameter to the instance ID of a standard Global Accelerator instance.
   * - If **ResourceType** is set to **basicaccelerator**, set this parameter to the instance ID of a basic Global Accelerator instance.
   * - If **ResourceType** is set to **bandwidthpackage**, set this parameter to the ID of a bandwidth plan.
   * - If **ResourceType** is set to **acl**, set this parameter to the ID of an access control policy group.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp149u6o36qt1as9b****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the Global Accelerator resource for which you want to modify the resource group. Valid values:
   * - **accelerator**: a standard Alibaba Cloud Global Accelerator (GA) instance.
   * - **basicaccelerator**: a basic Alibaba Cloud Global Accelerator (GA) instance.
   * - **bandwidthpackage**: a bandwidth plan.
   * - **acl**: an access control policy group.
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

