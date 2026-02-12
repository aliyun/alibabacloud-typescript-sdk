// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsConsumerStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the details of the consumer group. Valid values:
   * 
   * *   **true**: The details of the consumer group are queried. You can obtain details from the **ConsumerConnectionInfoList** and **DetailInTopicList** response parameters.
   * *   **false**: The details of the consumer group are not queried. The values of the **ConsumerConnectionInfoList** and **DetailInTopicList** response parameters are empty. This value is the default value of the Detail parameter.
   * 
   * @example
   * true
   */
  detail?: boolean;
  /**
   * @remarks
   * The ID of the consumer group whose details you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance to which the consumer group belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to query the information about thread stack traces. Valid values:
   * 
   * *   **true**: The information about thread stack traces is queried. You can obtain the information from the **Jstack** response parameter.
   * 
   * > If you want to obtain the information about thread stack traces, make sure that the **Detail** parameter in the request is set to **true**.
   * 
   * *   **false**: The information about thread stack traces is not queried. The value of the **Jstack** response parameter is empty. This value is the default value of the NeedJstack parameter.
   * 
   * @example
   * true
   */
  needJstack?: boolean;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      needJstack: 'NeedJstack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'boolean',
      groupId: 'string',
      instanceId: 'string',
      needJstack: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

