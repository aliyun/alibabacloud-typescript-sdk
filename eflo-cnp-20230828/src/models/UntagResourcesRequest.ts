// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to delete all, only effective when TagKey.N is empty. Allowed values: true, false, True, False. Default is false.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * Resource ID
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * Resource type
   * 
   * This parameter is required.
   * 
   * @example
   * ExperimentPlan
   */
  resourceType?: string;
  /**
   * @remarks
   * Tag key group, up to 20 items
   * 
   * This parameter is required.
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

