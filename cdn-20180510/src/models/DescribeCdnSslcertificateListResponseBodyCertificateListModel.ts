// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnSSLCertificateListResponseBodyCertificateListModelCertList } from "./DescribeCdnSslcertificateListResponseBodyCertificateListModelCertList";


export class DescribeCdnSSLCertificateListResponseBodyCertificateListModel extends $dara.Model {
  /**
   * @remarks
   * Details about each certificate.
   */
  certList?: DescribeCdnSSLCertificateListResponseBodyCertificateListModelCertList;
  /**
   * @remarks
   * The number of certificates.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: an integer from 1 to 1000.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      count: 'Count',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: DescribeCdnSSLCertificateListResponseBodyCertificateListModelCertList,
      count: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.certList && typeof (this.certList as any).validate === 'function') {
      (this.certList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

