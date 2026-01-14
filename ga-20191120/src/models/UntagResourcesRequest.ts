// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags of the specified resource. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
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
   * The IDs of the resources whose tags you want to remove.
   * 
   * *   If you set **ResourceType** to **accelerator**, set the value of ResourceId to the ID of a standard GA instance.
   * *   If you set **ResourceType** to **basicaccelerator**, set the value of ResourceId to the ID of a basic GA instance.
   * *   If you set **ResourceType** to **bandwidthpackage**, set the value of ResourceId to the ID of a bandwidth plan.
   * *   If you set **ResourceType** to **acl**, set the value of ResourceId to the ID of an ACL.
   * *   If you set **ResourceType** to **endpointgroup**, set the value of ResourceId to the ID of an endpoint group.
   * 
   * You can specify up to 50 GA resource IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource whose tags you want to remove. Valid values:
   * 
   * *   **accelerator**: a standard GA instance
   * *   **basicaccelerator**: a basic GA instance
   * *   **bandwidthpackage**: a bandwidth plan
   * *   **acl**: an access control list (ACL).
   * *   **endpointgroup**: an endpoint group
   * 
   * This parameter is required.
   * 
   * @example
   * accelerator
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag to be removed.
   * 
   * The system removes all tags with this tag key.
   * 
   * You can specify up to 20 tag keys.
   * 
   * >  If the **All** parameter is set to **true**, this parameter does not take effect.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      clientToken: 'string',
      regionId: 'string',
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

