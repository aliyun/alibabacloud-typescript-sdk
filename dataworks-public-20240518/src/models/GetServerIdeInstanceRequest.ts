// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServerIdeInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The personal development environment instance ID. You can call ListServerIdeInstances to obtain the ID.
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

