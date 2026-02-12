// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsGroupSubDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance to which the consumer group you want to query belongs.
   * 
   * This parameter is required.
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

