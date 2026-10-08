// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualificationUploadPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values:  
   * 
   * - zh: Chinese  
   * - en: English  
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * User IP address, which can be set to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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

