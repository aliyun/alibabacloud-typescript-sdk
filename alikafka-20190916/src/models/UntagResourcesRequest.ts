// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to detach all tags from the resource. This parameter takes effect when TagKey.N is empty. The default value is **false**.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of resources from which you want to detach tags.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Enumeration type, currently supported resource types:
   * 
   * - **INSTANCE**
   * 
   * - **TOPIC**
   * 
   * - **CONSUMERGROUP**
   * 
   * > Case-insensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys of the resource.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
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

