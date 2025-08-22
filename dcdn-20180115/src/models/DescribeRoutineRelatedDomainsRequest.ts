// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRoutineRelatedDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the routine. The name is unique in the same account.
   * 
   * This parameter is required.
   * 
   * @example
   * routine_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

