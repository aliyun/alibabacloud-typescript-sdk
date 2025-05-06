// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRemediationsResponseBodyRemediations } from "./ListRemediationsResponseBodyRemediations";


export class ListRemediationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The converted configuration of the remediation template. This parameter is returned only for an OOS remediation template.
   */
  remediations?: ListRemediationsResponseBodyRemediations[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0146963A-20C0-4E75-B93A-7D622B5FD7C8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of remediation settings.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remediations: 'Remediations',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      remediations: { 'type': 'array', 'itemType': ListRemediationsResponseBodyRemediations },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.remediations)) {
      $dara.Model.validateArray(this.remediations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

