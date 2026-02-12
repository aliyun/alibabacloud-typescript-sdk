// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that you want to detach from the resource.
   * 
   * *   If you include this parameter in a request, the value of this parameter cannot be an empty string.
   * *   The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * CartService
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that you want to query.
   * 
   * *   The value of this parameter can be an empty string.
   * *   The tag key must be 1 to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * ServiceA
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance to which the resource whose tags you want to query belongs.
   * 
   * > This parameter is required when you query the tags of a topic or a group.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that determines the start point of the next query.
   * 
   * @example
   * caeba0****be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of resource IDs.
   * 
   * @example
   * TopicA
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource whose tags you want to query. Valid values:
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
   * The tags that you want to query. A maximum of 20 tags can be included in the list.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

