// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubCrowdsResponseBodySubCrowds extends $dara.Model {
  /**
   * @remarks
   * The creation time. The value is in ISO 8601 format and includes a time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The number of users in the crowd group.
   * 
   * @example
   * 2
   */
  quantity?: number;
  /**
   * @remarks
   * The crowd source. Valid values:
   * ● ManualInput: Manual data entry.
   * ● UploadFile: File upload.
   * 
   * @example
   * ManualInput
   */
  source?: string;
  /**
   * @remarks
   * The sub-crowd ID.
   * 
   * @example
   * 3
   */
  subCrowdId?: string;
  /**
   * @remarks
   * The users in the crowd group.
   * 
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
  /**
   * @remarks
   * The list of sub-crowds.
   */
  subCrowds?: ListSubCrowdsResponseBodySubCrowds[];
  /**
   * @remarks
   * The total number of elements in the list.
   * 
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

