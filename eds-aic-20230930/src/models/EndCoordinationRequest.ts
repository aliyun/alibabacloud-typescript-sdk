// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EndCoordinationRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID of the coordination participant.
   * 
   * @example
   * lina
   */
  coordinatorUserId?: string;
  /**
   * @remarks
   * The ID of the instance that is in a coordination session.
   * 
   * @example
   * acp-2zecay9ponatdc4m****
   */
  instanceId?: string;
  /**
   * @remarks
   * The user ID of the coordination initiator.
   * 
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

