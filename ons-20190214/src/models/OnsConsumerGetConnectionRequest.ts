// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsConsumerGetConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group whose client connection status you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_consumer_id
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
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

