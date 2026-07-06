// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSAMLProviderResponseBodySAMLProvider extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the IdP.
   * 
   * @example
   * acs:ram::177242285274****:saml-provider/test-provider
   */
  arn?: string;
  /**
   * @remarks
   * The supported signature algorithm. Valid values:
   * 
   * - rsa-sha256
   * 
   * - rsa-sha1
   * 
   * @example
   * rsa-sha1
   */
  authnSignAlgo?: string;
  /**
   * @remarks
   * The time when the information was created. It is displayed in UTC.
   * 
   * @example
   * 2020-10-22T02:37:05Z
   */
  createDate?: string;
  /**
   * @remarks
   * The IdP description.
   * 
   * @example
   * This is a provider.
   */
  description?: string;
  /**
   * @remarks
   * The metadata file, which is Base64-encoded.
   * 
   * @example
   * PD94bWwgdmVy****
   */
  encodedSAMLMetadataDocument?: string;
  /**
   * @remarks
   * The IdP name.
   * 
   * @example
   * test-provider
   */
  SAMLProviderName?: string;
  /**
   * @remarks
   * The time when the information was last updated. It is displayed in UTC.
   * 
   * @example
   * 2020-10-22T02:51:20Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      authnSignAlgo: 'AuthnSignAlgo',
      createDate: 'CreateDate',
      description: 'Description',
      encodedSAMLMetadataDocument: 'EncodedSAMLMetadataDocument',
      SAMLProviderName: 'SAMLProviderName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      authnSignAlgo: 'string',
      createDate: 'string',
      description: 'string',
      encodedSAMLMetadataDocument: 'string',
      SAMLProviderName: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSAMLProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BAADB995-0C7A-476D-B293-7E94568EEDFB
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the IdP.
   */
  SAMLProvider?: GetSAMLProviderResponseBodySAMLProvider;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLProvider: 'SAMLProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLProvider: GetSAMLProviderResponseBodySAMLProvider,
    };
  }

  validate() {
    if(this.SAMLProvider && typeof (this.SAMLProvider as any).validate === 'function') {
      (this.SAMLProvider as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

