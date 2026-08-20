// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags of the target resource. This parameter takes effect only when TagKey.N is empty. Default value: False.
   * 
   * @example
   * False
   */
  all?: boolean;
  /**
   * @remarks
   * The list of resource IDs. Valid values of N: 1 to 50.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - Job
   * - Executor
   * 
   * This parameter is required.
   * 
   * @example
   * Job
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys. A maximum of 20 subkeys can be specified.
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

