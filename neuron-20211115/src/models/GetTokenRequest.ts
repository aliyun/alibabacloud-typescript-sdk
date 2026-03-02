// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenRequest extends $dara.Model {
  accountId?: string;
  pbcId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      pbcId: 'pbcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      pbcId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

