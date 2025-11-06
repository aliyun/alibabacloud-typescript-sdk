// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRegistrantProfilesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the default profile. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  defaultRegistrantProfile?: boolean;
  /**
   * @remarks
   * The email address of the domain name registrant.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The language of the error message to return if the request fails. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **0**.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **0**. Maximum value: **5000**.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * The state of real-name verification for the domain name registrant. Valid values:
   * 
   * *   **FAILED**: Real-name verification for the domain name fails.
   * *   **SUCCEED**: Real-name verification for the domain name is successful.
   * *   **NONAUDIT**: Real-name verification for the domain name is not performed.
   * *   **AUDITING**: Real-name verification for the domain name is in progress.
   * 
   * @example
   * SUCCEED
   */
  realNameStatus?: string;
  /**
   * @remarks
   * The name of the domain name registrant.
   * 
   * @example
   * li si
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * The ID of the registrant profile that you want to query. The system generates an ID after you create a registrant profile.
   * 
   * @example
   * 1234567
   */
  registrantProfileId?: number;
  /**
   * @remarks
   * The type of the registrant profile. Valid values:
   * 
   * *   **common**: common profile.
   * *   **cnnic**: China Internet Network Information Center (CNNIC) profile.
   * 
   * >  Only the Alibaba Cloud international site (alibabacloud.com) supports CNNIC profiles. To register domain names provided by CNNIC such as the .cn and . domain names on the Alibaba Cloud international site, you must use a CNNIC profile. To register other domain names, use a common profile.
   * 
   * @example
   * common
   */
  registrantProfileType?: string;
  /**
   * @remarks
   * The type of the domain name registrant. Valid values:
   * 
   * *   **1**: individual.
   * *   **2**: enterprise.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Test domain name
   */
  remark?: string;
  /**
   * @remarks
   * The IP address of the client. Set the value to 127.0.0.1.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  /**
   * @remarks
   * The Chinese name of the domain name registrant.
   */
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRegistrantProfile: 'DefaultRegistrantProfile',
      email: 'Email',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      realNameStatus: 'RealNameStatus',
      registrantOrganization: 'RegistrantOrganization',
      registrantProfileId: 'RegistrantProfileId',
      registrantProfileType: 'RegistrantProfileType',
      registrantType: 'RegistrantType',
      remark: 'Remark',
      userClientIp: 'UserClientIp',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRegistrantProfile: 'boolean',
      email: 'string',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      realNameStatus: 'string',
      registrantOrganization: 'string',
      registrantProfileId: 'number',
      registrantProfileType: 'string',
      registrantType: 'string',
      remark: 'string',
      userClientIp: 'string',
      zhRegistrantOrganization: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

