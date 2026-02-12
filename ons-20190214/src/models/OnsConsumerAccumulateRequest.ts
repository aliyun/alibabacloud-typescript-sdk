// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsConsumerAccumulateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the details of each topic to which the consumer group subscribes. Valid values:
   * 
   * *   **true**: The details of each topic are queried. You can obtain the details from the **DetailInTopicList** response parameter.
   * *   **false**: The details of each topic are not queried. This is the default value. If you use this value, the value of the **DetailInTopicList** response parameter is empty.
   * 
   * @example
   * true
   */
  detail?: boolean;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_consumer_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'boolean',
      groupId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

