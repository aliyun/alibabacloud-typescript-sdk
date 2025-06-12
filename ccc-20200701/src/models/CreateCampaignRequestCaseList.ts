// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCampaignRequestCaseList extends $dara.Model {
  customVariables?: string;
  /**
   * @example
   * 1888888888
   */
  phoneNumber?: string;
  /**
   * @example
   * 01
   */
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      customVariables: 'CustomVariables',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customVariables: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

