// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConsumerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Group name.
   * 
   * This parameter is required.
   * 
   * @example
   * CID-test
   */
  consumerId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
  /**
   * @remarks
   * Region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

