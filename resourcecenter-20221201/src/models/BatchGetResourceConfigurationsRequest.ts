// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchGetResourceConfigurationsRequestResources extends $dara.Model {
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * eip-bp1kyg72m****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * For a list of resource types supported by Resource Center, see [Alibaba Cloud services and resource types that are supported by Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * 
   * @example
   * ACS::VPC::RouteTable
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class BatchGetResourceConfigurationsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of resources.
   */
  resources?: BatchGetResourceConfigurationsRequestResources[];
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: { 'type': 'array', 'itemType': BatchGetResourceConfigurationsRequestResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

