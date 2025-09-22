// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSAMLProviderResponseBodySAMLProvider extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the IdP.
   * 
   * @example
   * acs:ram::177242285274****:saml-provider/test-provider
   */
  arn?: string;
  authnSignAlgo?: string;
  /**
   * @remarks
   * The creation time. The time is displayed in UTC.
   * 
   * @example
   * 2020-10-22T02:37:05Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a provider.
   */
  description?: string;
  /**
   * @remarks
   * The name of the IdP.
   * 
   * @example
   * test-provider
   */
  SAMLProviderName?: string;
  /**
   * @remarks
   * The update time. The time is displayed in UTC.
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

export class CreateSAMLProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A95A763D-F6B7-5242-83EB-AB45CE67F358
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the IdP.
   */
  SAMLProvider?: CreateSAMLProviderResponseBodySAMLProvider;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLProvider: 'SAMLProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLProvider: CreateSAMLProviderResponseBodySAMLProvider,
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

