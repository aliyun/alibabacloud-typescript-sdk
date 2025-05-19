// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSubCrowdsResponseBodySubCrowds } from "./ListSubCrowdsResponseBodySubCrowds";


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

