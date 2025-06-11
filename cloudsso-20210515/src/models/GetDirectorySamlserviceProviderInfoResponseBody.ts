// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDirectorySAMLServiceProviderInfoResponseBodySAMLServiceProvider } from "./GetDirectorySamlserviceProviderInfoResponseBodySamlserviceProvider";


export class GetDirectorySAMLServiceProviderInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4632107D-BCE1-5A96-B30B-182EE0709625
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the SP.
   */
  SAMLServiceProvider?: GetDirectorySAMLServiceProviderInfoResponseBodySAMLServiceProvider;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLServiceProvider: 'SAMLServiceProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLServiceProvider: GetDirectorySAMLServiceProviderInfoResponseBodySAMLServiceProvider,
    };
  }

  validate() {
    if(this.SAMLServiceProvider && typeof (this.SAMLServiceProvider as any).validate === 'function') {
      (this.SAMLServiceProvider as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

