// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubCrowdsResponseBodySubCrowds extends $dara.Model {
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2
   */
  quantity?: number;
  /**
   * @example
   * ManualInput
   */
  source?: string;
  /**
   * @example
   * 3
   */
  subCrowdId?: string;
  /**
   * @example
   * user1,user2
   */
  users?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      quantity: 'Quantity',
      source: 'Source',
      subCrowdId: 'SubCrowdId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      quantity: 'number',
      source: 'string',
      subCrowdId: 'string',
      users: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

