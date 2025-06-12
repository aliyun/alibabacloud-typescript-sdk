// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOutboundNumbersOfUserResponseBodyDataList extends $dara.Model {
  city?: string;
  /**
   * @example
   * 0830019****
   */
  number?: string;
  provider?: string;
  providerCode?: string;
  providerDisplayName?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      number: 'Number',
      provider: 'Provider',
      providerCode: 'ProviderCode',
      providerDisplayName: 'ProviderDisplayName',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      number: 'string',
      provider: 'string',
      providerCode: 'string',
      providerDisplayName: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

