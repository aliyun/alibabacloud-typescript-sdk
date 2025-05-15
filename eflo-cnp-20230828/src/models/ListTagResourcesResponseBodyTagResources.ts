// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * ResourceId
   * 
   * @example
   * 189
   */
  resourceId?: string;
  /**
   * @remarks
   * Resource type
   * 
   * @example
   * ExperimentPlan
   */
  resourceType?: string;
  /**
   * @remarks
   * Tag key
   * 
   * @example
   * owner
   */
  tagKey?: string;
  /**
   * @remarks
   * Tag value
   * 
   * @example
   * syg
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

