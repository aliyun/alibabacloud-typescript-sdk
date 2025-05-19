// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScenesRequest extends $dara.Model {
  /**
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
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

