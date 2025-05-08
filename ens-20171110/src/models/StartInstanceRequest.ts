// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. You can start only one instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-instance****
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

