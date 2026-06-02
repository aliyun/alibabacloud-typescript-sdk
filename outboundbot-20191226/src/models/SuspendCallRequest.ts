// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SuspendCallRequest extends $dara.Model {
  /**
   * @example
   * []
   */
  calledNumbers?: string[];
  /**
   * @example
   * f745881b-343d-43e4-9c51-31b7b063031c
   */
  groupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a5fc6490-ef1e-4666-870a-07a4e586c414
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumbers: 'CalledNumbers',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumbers: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.calledNumbers)) {
      $dara.Model.validateArray(this.calledNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

