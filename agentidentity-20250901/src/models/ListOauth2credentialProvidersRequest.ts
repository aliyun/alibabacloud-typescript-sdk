// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOAuth2CredentialProvidersRequest extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  tokenVaultName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tokenVaultName: 'TokenVaultName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      tokenVaultName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

