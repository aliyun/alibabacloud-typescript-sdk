// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgServiceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
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
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agAccountType: 'AgAccountType',
      mpk: 'Mpk',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agAccountType: 'string',
      mpk: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

