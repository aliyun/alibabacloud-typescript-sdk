// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoRenewAttributeResponseBodyItems } from "./DescribeAutoRenewAttributeResponseBodyItems";


export class DescribeAutoRenewAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The renewal information of the cluster.
   */
  items?: DescribeAutoRenewAttributeResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeAutoRenewAttributeResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

