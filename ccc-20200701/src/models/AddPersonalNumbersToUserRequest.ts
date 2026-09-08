// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPersonalNumbersToUserRequest extends $dara.Model {
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
   * List of numbers to be added. The numbers must be attachable to the agent corresponding to UserId. If you are unsure which numbers the agent can attach, refer to the ListPersonalNumbersOfUser API.
   * 
   * This parameter is required.
   * 
   * @example
   * ["0101234****","0105678****"]
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

