// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSubRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 81
   */
  subId?: number;
  static names(): { [key: string]: string } {
    return {
      subId: 'SubId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

