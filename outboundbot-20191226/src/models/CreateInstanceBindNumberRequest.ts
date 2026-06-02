// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceBindNumberRequest extends $dara.Model {
  /**
   * @example
   * 1,2,4,5
   */
  instanceList?: string;
  /**
   * @example
   * 10088
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

