// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeStatus extends $dara.Model {
  /**
   * @remarks
   * The code of the instance lifecycle state.
   * 
   * @example
   * 1
   */
  code?: number;
  /**
   * @remarks
   * The name of the instance lifecycle state.
   * 
   * @example
   * Running
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

