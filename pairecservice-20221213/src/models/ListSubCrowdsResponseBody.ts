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

export class ListSubCrowdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C5AEB79E-FAA4-5DCE-8CD7-1CAF549ECC3E
   */
  requestId?: string;
  subCrowds?: ListSubCrowdsResponseBodySubCrowds[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subCrowds: 'SubCrowds',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subCrowds: { 'type': 'array', 'itemType': ListSubCrowdsResponseBodySubCrowds },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.subCrowds)) {
      $dara.Model.validateArray(this.subCrowds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

