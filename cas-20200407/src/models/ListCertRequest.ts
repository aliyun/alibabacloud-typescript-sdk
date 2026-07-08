// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate type. Valid values:
   * 
   * - **CA**: CA certificate
   * 
   * - **CERT**: issued certificate
   * 
   * @example
   * CERT
   */
  certType?: string;
  /**
   * @remarks
   * The page number to return. The default value is 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * A comma-separated list of certificate identifiers.
   * 
   * @example
   * aaa,bbb
   */
  identifiers?: string;
  /**
   * @remarks
   * The keyword for a fuzzy search by name, domain name, or subject alternative name.
   * 
   * @example
   * test_name
   */
  keyWord?: string;
  /**
   * @remarks
   * The number of entries per page. The default value is 50.
   * 
   * @example
   * 50
   */
  showSize?: number;
  /**
   * @remarks
   * The source of the certificate. Valid values:
   * 
   * - **upload**: uploaded certificate
   * 
   * - **aliyun**: Alibaba Cloud certificate
   * 
   * @example
   * aliyun
   */
  sourceType?: string;
  /**
   * @remarks
   * The certificate status. Valid values:
   * 
   * - **ISSUE**: issued
   * 
   * - **REVOKE**: revoked
   * 
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @remarks
   * The warehouse ID. You can obtain this ID by calling the [ListCertWarehouse](https://help.aliyun.com/document_detail/453246.html) API.
   * 
   * @example
   * 12
   */
  warehouseId?: number;
  static names(): { [key: string]: string } {
    return {
      certType: 'CertType',
      currentPage: 'CurrentPage',
      identifiers: 'Identifiers',
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
      identifiers: 'string',
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

