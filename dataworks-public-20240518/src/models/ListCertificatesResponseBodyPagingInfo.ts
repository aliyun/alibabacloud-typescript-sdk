// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCertificatesResponseBodyPagingInfoCertificates } from "./ListCertificatesResponseBodyPagingInfoCertificates";


export class ListCertificatesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The certificate files.
   */
  certificates?: ListCertificatesResponseBodyPagingInfoCertificates[];
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': ListCertificatesResponseBodyPagingInfoCertificates },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

