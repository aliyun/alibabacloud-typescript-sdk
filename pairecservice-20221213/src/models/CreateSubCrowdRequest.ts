// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubCrowdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ManualInput
   */
  source?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user1,user2,user3
   */
  users?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      source: 'Source',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      source: 'string',
      users: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

