// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlarmDetailByIdRequest extends $dara.Model {
  /**
   * @remarks
   * Primary key ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 20077761
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

