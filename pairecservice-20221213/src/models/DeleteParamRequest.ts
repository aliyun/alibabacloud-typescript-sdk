// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteParamRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID, which can be obtained by calling the ListInstances API.
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

