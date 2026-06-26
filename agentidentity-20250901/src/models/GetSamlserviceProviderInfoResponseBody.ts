// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSAMLServiceProviderInfoResponseBodySAMLServiceProviderInfo extends $dara.Model {
  ACSURL?: string;
  entityId?: string;
  SPMetadataDocument?: string;
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

