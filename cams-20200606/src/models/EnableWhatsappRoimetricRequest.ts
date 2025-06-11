// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableWhatsappROIMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the user within the ISV account.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The verification code used to verify whether the RAM user is authorized by the independent software vendor (ISV) account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      isvCode: 'IsvCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      isvCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

