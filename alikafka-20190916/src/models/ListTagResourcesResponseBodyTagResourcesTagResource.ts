// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource. A resource ID complies with the following rules:
   * 
   * *   The resource ID of an instance is the value of the instanceId parameter.
   * *   The resource ID of a topic is the value of the Kafka_alikafka_instanceId_topic parameter.
   * *   The resource ID of a consumer group is the value of the Kafka_alikafka_instanceId_consumerGroup parameter.
   * 
   * For example, the resources whose tags you want to query include the alikafka_post-cn-v0h1fgs2xxxx instance, the test-topic topic, and the test-consumer-group consumer group. In this case, their resource IDs are alikafka_post-cn-v0h1fgs2xxxx, Kafka_alikafka_post-cn-v0h1fgs2xxxx_test-topic, and Kafka_alikafka_post-cn-v0h1fgs2xxxx_test-consumer-group.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. The value is an enumerated value. Valid values:
   * 
   * *   **Instance**
   * *   **Topic**
   * *   **Consumergroup**
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * FinanceJoshua
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

