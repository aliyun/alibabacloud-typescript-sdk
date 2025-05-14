// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetClusterDiagnosisCheckItemsResponseBodyCheckItems } from "./GetClusterDiagnosisCheckItemsResponseBodyCheckItems";


export class GetClusterDiagnosisCheckItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The check item.
   */
  checkItems?: GetClusterDiagnosisCheckItemsResponseBodyCheckItems[];
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the check is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1DFFD8C6-259E-582B-8B40-002C17DC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkItems: 'check_items',
      code: 'code',
      isSuccess: 'is_success',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItems: { 'type': 'array', 'itemType': GetClusterDiagnosisCheckItemsResponseBodyCheckItems },
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkItems)) {
      $dara.Model.validateArray(this.checkItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

