// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsGroupConsumerUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group for which you want to configure read permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_groupId
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance to which the consumer group you want to configure belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to authorize the consumer group to read messages. Valid values:
   * 
   * *   **true**: The consumer group can read messages.
   * *   **false**: The consumer group cannot read messages.
   * 
   * Default value: **true**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  readEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      readEnable: 'ReadEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      readEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

