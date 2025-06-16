// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSmartAuditResultResponseBodyDataErrorItemDetails } from "./GetSmartAuditResultResponseBodyDataErrorItemDetails";


export class GetSmartAuditResultResponseBodyData extends $dara.Model {
  errorItemDetails?: GetSmartAuditResultResponseBodyDataErrorItemDetails[];
  /**
   * @example
   * SUCCESSED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorItemDetails: 'ErrorItemDetails',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorItemDetails: { 'type': 'array', 'itemType': GetSmartAuditResultResponseBodyDataErrorItemDetails },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorItemDetails)) {
      $dara.Model.validateArray(this.errorItemDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

