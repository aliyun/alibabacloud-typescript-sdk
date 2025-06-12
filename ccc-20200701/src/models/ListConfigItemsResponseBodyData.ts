// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigItemsResponseBodyData extends $dara.Model {
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * config-item
   */
  name?: string;
  /**
   * @example
   * ccc-test
   */
  objectId?: string;
  /**
   * @example
   * INSTANCE
   */
  objectType?: string;
  /**
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      objectId: 'string',
      objectType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

