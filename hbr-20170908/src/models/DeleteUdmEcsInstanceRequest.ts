// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUdmEcsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-2zed************tlrm
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

