// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushAllExperimentRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. Call the ListInstances API to obtain this ID.
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

