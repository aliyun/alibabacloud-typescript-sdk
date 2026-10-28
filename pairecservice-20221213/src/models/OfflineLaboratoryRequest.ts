// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineLaboratoryRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the instance. You can call the ListInstances operation to obtain instance ID.
   * 
   * This parameter is required.
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

