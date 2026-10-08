// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRegistrantProfileRealNameVerificationInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retrieve the identity verification image. Valid values:  
   * - **true**: Retrieve the image.  
   * - **false**: Do not retrieve the image.  
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  fetchImage?: boolean;
  /**
   * @remarks
   * The language of error messages returned by the API. Valid values:  
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
   * The ID of the information template to be queried.  
   * 
   * The system automatically generates this ID after the information template is created. You can call the [QueryRegistrantProfiles](https://help.aliyun.com/document_detail/67701.html) API to query the information template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  registrantProfileId?: number;
  /**
   * @remarks
   * The user IP address. You can set it to 127.0.0.1.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      fetchImage: 'FetchImage',
      lang: 'Lang',
      registrantProfileId: 'RegistrantProfileId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchImage: 'boolean',
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

