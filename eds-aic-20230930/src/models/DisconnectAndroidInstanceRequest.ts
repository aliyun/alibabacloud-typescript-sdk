// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisconnectAndroidInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">
   * 
   * If you use the Cloud Phone Matrix Edition and the instance stream pattern is collaborative mode, you can specify `EndUserId` to disconnect a specific user and invalidate the corresponding ticket.
   * 
   * 
   * 
   * <props="intl">
   * 
   * This parameter is not publicly available.
   * 
   * @example
   * user1
   */
  endUserId?: string;
  /**
   * @remarks
   * A list of instance IDs. You can specify 1 to 100 IDs.
   */
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

