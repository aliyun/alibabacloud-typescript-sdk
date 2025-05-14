// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EndCoordinationRequest extends $dara.Model {
  /**
   * @example
   * lina
   */
  coordinatorUserId?: string;
  /**
   * @example
   * acp-2zecay9ponatdc4m****
   */
  instanceId?: string;
  /**
   * @example
   * xiaoming
   */
  ownerUserId?: string;
  static names(): { [key: string]: string } {
    return {
      coordinatorUserId: 'CoordinatorUserId',
      instanceId: 'InstanceId',
      ownerUserId: 'OwnerUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinatorUserId: 'string',
      instanceId: 'string',
      ownerUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

