// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagSupabaseProjectRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to unbind all tags from the instance. This parameter takes effect only when TagKey.N is not specified in the request. Valid values:
   * 
   * - true
   * - false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID. Valid values of N: 1 to 50.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * - `instance`: reserved mode instance.
   * - `ALIYUN::GPDB::INSTANCE`: elastic mode instance.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key of the resource. Valid values of N: 1 to 20.
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

