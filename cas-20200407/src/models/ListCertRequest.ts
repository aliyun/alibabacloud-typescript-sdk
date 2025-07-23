// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertRequest extends $dara.Model {
  /**
   * @remarks
   * 证书的类型 。取值：
   * 
   * - **CA**：表示CA证书。
   * - **CERT**：表示签发的证书。
   * 
   * @example
   * CERT
   */
  certType?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword for the query. You can enter a name, domain name, or Subject Alternative Name (SAN) extension. Fuzzy match is supported.
   * 
   * @example
   * test_name
   */
  keyWord?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 50.
   * 
   * @example
   * 50
   */
  showSize?: number;
  /**
   * @remarks
   * The source of the certificate. Valid values:
   * 
   * *   **upload**: uploaded certificate
   * *   **aliyun**: Alibaba Cloud certificate
   * 
   * @example
   * aliyun
   */
  sourceType?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   **ISSUE**: issued
   * *   **REVOKE**: revoked
   * 
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @remarks
   * The ID of the certificate repository. You can call the ListCertWarehouse API operation to query the IDs of certificate repositories.
   * 
   * @example
   * 12
   */
  warehouseId?: number;
  static names(): { [key: string]: string } {
    return {
      certType: 'CertType',
      currentPage: 'CurrentPage',
      keyWord: 'KeyWord',
      showSize: 'ShowSize',
      sourceType: 'SourceType',
      status: 'Status',
      warehouseId: 'WarehouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certType: 'string',
      currentPage: 'number',
      keyWord: 'string',
      showSize: 'number',
      sourceType: 'string',
      status: 'string',
      warehouseId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

