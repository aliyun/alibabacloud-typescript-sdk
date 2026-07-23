// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScenesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. You can obtain this ID by calling the `ListInstances` operation.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the scene to use as a filter.
   * 
   * @example
   * scene1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

