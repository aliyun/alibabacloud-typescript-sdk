// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFixedPriceDemandOrderRequest extends $dara.Model {
  code?: string;
  contactId?: string;
  domain?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactId: 'ContactId',
      domain: 'Domain',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactId: 'string',
      domain: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

