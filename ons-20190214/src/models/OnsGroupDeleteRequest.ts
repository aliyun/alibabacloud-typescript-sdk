// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsGroupDeleteRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_groupId
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

