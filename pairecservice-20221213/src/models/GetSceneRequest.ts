// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSceneRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can get this ID by calling the ListInstances operation.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

