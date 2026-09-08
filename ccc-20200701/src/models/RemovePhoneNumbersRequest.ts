// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemovePhoneNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to force the removal. If a number is associated with a skill group, contact flow, or agent, you must set this parameter to `true` to remove it. The default value is `false`.
   * 
   * @example
   * true
   */
  force?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of numbers to remove.
   * 
   * This parameter is required.
   * 
   * @example
   * ["0101234****","0105678****"]
   */
  numberList?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      instanceId: 'InstanceId',
      numberList: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      instanceId: 'string',
      numberList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

