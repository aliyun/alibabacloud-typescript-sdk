// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsMessageGetByKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to which the messages that you want to query belong.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The key of the messages that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * messageKey1
   */
  key?: string;
  /**
   * @remarks
   * The topic that contains the messages that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      key: 'Key',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      key: 'string',
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

