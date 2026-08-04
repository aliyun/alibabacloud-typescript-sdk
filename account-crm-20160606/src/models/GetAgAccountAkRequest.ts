// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgAccountAkRequest extends $dara.Model {
  agAccountType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mpk?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      agAccountType: 'AgAccountType',
      mpk: 'Mpk',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agAccountType: 'string',
      mpk: 'string',
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

