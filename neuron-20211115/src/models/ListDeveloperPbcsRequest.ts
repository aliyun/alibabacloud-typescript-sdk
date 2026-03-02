// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeveloperPbcsRequest extends $dara.Model {
  companyId?: number;
  marketId?: number;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      marketId: 'marketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      marketId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

