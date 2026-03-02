// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOIDCProviderRequest extends $dara.Model {
  clientIds?: string;
  issuanceLimitTime?: number;
  newDescription?: string;
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      issuanceLimitTime: 'IssuanceLimitTime',
      newDescription: 'NewDescription',
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: 'string',
      issuanceLimitTime: 'number',
      newDescription: 'string',
      OIDCProviderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

