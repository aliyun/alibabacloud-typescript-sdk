// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateScratchResponseBodyTemplateScratchSourceResources extends $dara.Model {
  /**
   * @remarks
   * The related resource type filters.
   */
  relatedResourceTypeFilter?: string[];
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * vpc-m5e7cv7e9mz69sszb****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      relatedResourceTypeFilter: 'RelatedResourceTypeFilter',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

