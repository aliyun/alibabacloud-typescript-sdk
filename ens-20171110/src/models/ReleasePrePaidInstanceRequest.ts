// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleasePrePaidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to be deleted. You can specify only one instance ID.
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

