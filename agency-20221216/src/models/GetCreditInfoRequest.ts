// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCreditInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Sub Account UID
   * 
   * This parameter is required.
   * 
   * @example
   * 1792155717328010
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

