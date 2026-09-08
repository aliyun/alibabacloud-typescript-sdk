// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemovePersonalNumbersFromUserRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * List of personal outbound numbers to delete. You can obtain the current list of personal outbound numbers associated with the agent by invoking ListPersonalNumbersOfUser.
   * 
   * This parameter is required.
   * 
   * @example
   * ["0101234****", "0105678****"]
   */
  numberList?: string;
  /**
   * @remarks
   * Agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      numberList: 'NumberList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      numberList: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

