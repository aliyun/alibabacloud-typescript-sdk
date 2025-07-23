// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackageStateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of issued certificates of the specified specifications.
   * 
   * @example
   * 1
   */
  issuedCount?: number;
  /**
   * @remarks
   * The specifications of the certificate resource plan. Valid values:
   * 
   * *   **digicert-free-1-free**: DigiCert single-domain DV certificate in a three-month free trial, available only on the China site (aliyun.com).
   * *   **symantec-free-1-free**: DigiCert single-domain DV certificate in a one-year free trial, available only on the China site (aliyun.com).
   * *   **symantec-dv-1-starter**: DigiCert wildcard DV certificate.
   * *   **symantec-ov-1-personal**: DigiCert single-domain OV certificate.
   * *   **symantec-ov-w-personal**: DigiCert wildcard OV certificate.
   * *   **geotrust-dv-1-starter**: GeoTrust single-domain DV certificate.
   * *   **geotrust-dv-w-starter**: GeoTrust wildcard DV certificate.
   * *   **geotrust-ov-1-personal**: GeoTrust single-domain OV certificate.
   * *   **geotrust-ov-w-personal**: GeoTrust wildcard OV certificate.
   * *   **globalsign-dv-1-personal**: GlobalSign single-domain DV certificate.
   * *   **globalsign-dv-w-advanced**: GlobalSign wildcard DV certificate.
   * *   **globalsign-ov-1-personal**: GlobalSign single-domain OV certificate.
   * *   **globalsign-ov-w-advanced**: GlobalSign wildcard OV certificate.
   * *   **cfca-ov-1-personal**: CFCA single-domain OV certificate, available only on the China site (aliyun.com).
   * *   **cfca-ev-w-advanced**: CFCA wildcard OV certificate, available only on the China site (aliyun.com).
   * 
   * @example
   * symantec-free-1-free
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 10CFA380-1C58-45C7-8075-06215F3DB681
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of purchased certificate resource plans of the specified specifications.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of certificate applications that you submitted for certificates of the specified specifications.
   * 
   * > : A successful call of the [CreateCertificateForPackageRequest](https://help.aliyun.com/document_detail/204087.html), [CreateCertificateRequest](https://help.aliyun.com/document_detail/164105.html), or [CreateCertificateWithCsrRequest](https://help.aliyun.com/document_detail/178732.html) operation is counted as one a certificate application, regardless of whether the certificate is issued.
   * 
   * @example
   * 2
   */
  usedCount?: number;
  static names(): { [key: string]: string } {
    return {
      issuedCount: 'IssuedCount',
      productCode: 'ProductCode',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      usedCount: 'UsedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issuedCount: 'number',
      productCode: 'string',
      requestId: 'string',
      totalCount: 'number',
      usedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

