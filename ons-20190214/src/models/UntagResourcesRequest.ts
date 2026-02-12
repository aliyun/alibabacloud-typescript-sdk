// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags that are attached to the specified resource. This parameter takes effect only if the **TagKey** parameter is empty. Default value: **false**.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required when you detach tags from a topic or a group.
   * 
   * @example
   * MQ_INST_188077086902****_BX4jvZZG
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * TopicA
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource from which you want to detach tags. Valid values:
   * 
   * *   **INSTANCE**
   * *   **TOPIC**
   * *   **GROUP**
   * 
   * This parameter is required.
   * 
   * @example
   * TOPIC
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys of the resource.
   * 
   * @example
   * CartService
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      instanceId: 'InstanceId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      instanceId: 'string',
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

