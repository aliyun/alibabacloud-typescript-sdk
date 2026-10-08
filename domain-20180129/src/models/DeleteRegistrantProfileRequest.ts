// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRegistrantProfileRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the error message returned by the API. Valid values:  
   * - **zh**: Chinese.  
   * - **en**: English.  
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the domain name registrant profile to delete. You can call the [QueryRegistrantProfiles](https://help.aliyun.com/document_detail/67701.html) API to query the profile ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3600000
   */
  registrantProfileId?: number;
  /**
   * @remarks
   * The User IP address. You can set it to 127.0.0.1.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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

