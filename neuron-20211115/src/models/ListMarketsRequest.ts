// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMarketsRequest extends $dara.Model {
  /**
   * @example
   * 41
   */
  companyId?: number;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

