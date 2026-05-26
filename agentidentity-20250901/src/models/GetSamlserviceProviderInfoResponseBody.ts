// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSAMLServiceProviderInfoResponseBodySAMLServiceProviderInfo extends $dara.Model {
  /**
   * @example
   * https://signin-cn-beijing.aliyunagentid.com/up_xxxxxxxxxxxxxxxxxxxx/saml/acs
   */
  ACSURL?: string;
  /**
   * @example
   * https://signin-cn-beijing.aliyunagentid.com/up_xxxxxxxxxxxxxxxxxxxx
   */
  entityId?: string;
  /**
   * @example
   * <?xml version=\\"1.0\\" encoding=\\"UTF-8\\" standalone=\\"no\\"?>\\n<md:EntityDescriptor entityID=\\"https://signin......
   */
  SPMetadataDocument?: string;
  /**
   * @example
   * up_xxxxxxxxxxxxxxxxxxxx
   */
  userPoolId?: string;
  static names(): { [key: string]: string } {
    return {
      ACSURL: 'ACSURL',
      entityId: 'EntityId',
      SPMetadataDocument: 'SPMetadataDocument',
      userPoolId: 'UserPoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACSURL: 'string',
      entityId: 'string',
      SPMetadataDocument: 'string',
      userPoolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSAMLServiceProviderInfoResponseBody extends $dara.Model {
  /**
   * @example
   * AABD6E03-4B3A-5687-88FF-72232670ED0C
   */
  requestId?: string;
  SAMLServiceProviderInfo?: GetSAMLServiceProviderInfoResponseBodySAMLServiceProviderInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLServiceProviderInfo: 'SAMLServiceProviderInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLServiceProviderInfo: GetSAMLServiceProviderInfoResponseBodySAMLServiceProviderInfo,
    };
  }

  validate() {
    if(this.SAMLServiceProviderInfo && typeof (this.SAMLServiceProviderInfo as any).validate === 'function') {
      (this.SAMLServiceProviderInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

