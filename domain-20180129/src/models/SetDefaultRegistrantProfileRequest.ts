// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDefaultRegistrantProfileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact template to be set as default.
   * 
   * The system automatically generates this ID after the template is successfully created. You can invoke the [QueryRegistrantProfiles](https://help.aliyun.com/document_detail/67701.html) API to query the template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  registrantProfileId?: number;
  /**
   * @remarks
   * The user IP address. The default value is **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      registrantProfileId: 'RegistrantProfileId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrantProfileId: 'number',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

