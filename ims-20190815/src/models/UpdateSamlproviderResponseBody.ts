// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSAMLProviderResponseBodySAMLProvider extends $dara.Model {
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
   * The point in time at which the IdP was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-10-22T02:37:05Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the IdP.
   * 
   * @example
   * This is a new provider.
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
   * The point in time at which the information about the IdP was modified. The time is displayed in UTC.
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

export class UpdateSAMLProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E5EDDFD2-3654-4F9F-9780-4AE7D81823EF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the IdP.
   */
  SAMLProvider?: UpdateSAMLProviderResponseBodySAMLProvider;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLProvider: 'SAMLProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLProvider: UpdateSAMLProviderResponseBodySAMLProvider,
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

