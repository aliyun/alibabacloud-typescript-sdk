// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveDoNotCallNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * ["1900000****","1312211****"]
   */
  numberList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      numberList: 'NumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

