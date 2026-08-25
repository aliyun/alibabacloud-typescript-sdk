// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartServerIdeInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the personal development environment instance. You can call ListServerIdeInstances to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 699573
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

