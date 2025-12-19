// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceAPIKeyRequest extends $dara.Model {
  /**
   * @example
   * test-api-key-provider
   */
  resourceCredentialProviderName?: string;
  /**
   * @example
   * eyAgImFsZyI6ICJSUzI1N****
   */
  workloadAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCredentialProviderName: 'ResourceCredentialProviderName',
      workloadAccessToken: 'WorkloadAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCredentialProviderName: 'string',
      workloadAccessToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

