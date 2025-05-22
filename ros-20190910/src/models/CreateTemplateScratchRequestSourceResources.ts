// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateScratchRequestSourceResources extends $dara.Model {
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * > 
   * 
   * *   This parameter takes effect only when TemplateScratchType is set to ArchitectureDetection.
   * 
   * *   The region ID of a global resource is `global`. For example, the region ID of the ALIYUN::CDN::Domain global resource is `global`.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The related resource type filters.
   */
  relatedResourceTypeFilter?: string[];
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1m6fww66xbntjyc****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      relatedResourceTypeFilter: 'RelatedResourceTypeFilter',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      relatedResourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedResourceTypeFilter)) {
      $dara.Model.validateArray(this.relatedResourceTypeFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

