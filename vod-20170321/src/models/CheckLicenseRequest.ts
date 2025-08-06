// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckLicenseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  businessType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  filter?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nonce?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sign?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      filter: 'Filter',
      nonce: 'Nonce',
      sign: 'Sign',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      filter: 'string',
      nonce: 'string',
      sign: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

