// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the object to which the config item applies. This can be the ID of an Alibaba Cloud account, an instance, a skill group, or an agent.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  objectId?: string;
  /**
   * @remarks
   * The type of the object.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      objectId: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

