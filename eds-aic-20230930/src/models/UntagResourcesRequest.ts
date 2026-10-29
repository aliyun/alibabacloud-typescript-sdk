// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resources. This parameter takes effect only when TagKey.N is not specified. Default value: false.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The list of resource IDs, which are cloud phone IDs. You can specify 1 to 50 IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * - ALIYUN::ACP::INSTANCE: Cloud phone.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ACP::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys. You can specify 1 to 20 tag keys.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
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

