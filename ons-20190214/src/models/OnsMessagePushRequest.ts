// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsMessagePushRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer client. You can call the [OnsConsumerGetConnection](https://help.aliyun.com/document_detail/29598.html) operation to query client IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 30.5.121.**@24813#-1999745829#-1737591554#453111174894656
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the consumer group. For information about what a consumer group is, see [Terms](https://help.aliyun.com/document_detail/29533.html).
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance to which the specified consumer group belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * 0BC1669963053CF68F733BB70396****
   */
  msgId?: string;
  /**
   * @remarks
   * The topic to which the message is pushed.
   * 
   * This parameter is required.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      groupId: 'string',
      instanceId: 'string',
      msgId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

