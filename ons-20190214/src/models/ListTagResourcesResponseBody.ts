// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates the ID of the resource.
   * 
   * @example
   * TopicA
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource whose tags you want to query.
   * 
   * *   ALIYUN::MQ::INSTANCE: indicates that the resource is a ApsaraMQ for RocketMQ instance.
   * *   ALIYUN::MQ::TOPIC: indicates that the resource is a topic.
   * *   ALIYUN::MQ::GROUP: indicates that the resource is a group.
   * 
   * @example
   * ALIYUN::MQ::TOPIC
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * CartService
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * ServiceA
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

export class ListTagResourcesResponseBody extends $dara.Model {
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
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 301D2CBE-66F8-403D-AEC0-82582478****
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the resource and tags, including the resource ID, the resource type, tag keys, and tag values.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

