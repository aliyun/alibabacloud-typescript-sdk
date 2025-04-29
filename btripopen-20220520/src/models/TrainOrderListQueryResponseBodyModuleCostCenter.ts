// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderListQueryResponseBodyModuleCostCenter extends $dara.Model {
  corpId?: string;
  /**
   * @example
   * 11643
   */
  id?: number;
  name?: string;
  /**
   * @example
   * CS112234
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corp_id',
      id: 'id',
      name: 'name',
      number: 'number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      id: 'number',
      name: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

