// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOtaSearchResponseBodyModuleItemListAgreementPriceCodes extends $dara.Model {
  code?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

