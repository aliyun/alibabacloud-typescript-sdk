// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFailReasonForRegistrantProfileRealNameVerificationRequest extends $dara.Model {
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
   * The ID of the information template for which identity verification failed. You can call the [QueryRegistrantProfiles](https://help.aliyun.com/document_detail/67701.html) API to query the template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  registrantProfileID?: number;
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
      registrantProfileID: 'RegistrantProfileID',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      registrantProfileID: 'number',
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

