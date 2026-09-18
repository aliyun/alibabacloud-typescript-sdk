// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertWarehouseResponseBodyCertWarehouseList extends $dara.Model {
  /**
   * @remarks
   * The expiration time, in timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1665819958000
   */
  endTime?: number;
  /**
   * @remarks
   * The sales instance.
   * 
   * @example
   * 14dcc8afc7578e1f
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the repository has expired. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * @example
   * false
   */
  isExpired?: boolean;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The PCA instance.
   * 
   * @example
   * 14dcc8afc7578e1f
   */
  pcaInstanceId?: string;
  /**
   * @remarks
   * Qps。
   * 
   * @example
   * 10
   */
  qps?: number;
  /**
   * @remarks
   * The repository type. Valid values:
   * 
   * - **uploadCA**: an uploaded CA certificate that contains a complete certificate chain.
   * - **uploadPCA**: an uploaded certificate, including a self-signed certificate, a certificate issued by a third party, or a certificate issued by Alibaba Cloud.
   * - **aliyunPCA**: an Alibaba Cloud PCA certificate.
   * 
   * @example
   * aliyunPCA
   */
  type?: string;
  /**
   * @remarks
   * The repository ID.
   * 
   * @example
   * 1
   */
  whId?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      isExpired: 'IsExpired',
      name: 'Name',
      pcaInstanceId: 'PcaInstanceId',
      qps: 'Qps',
      type: 'Type',
      whId: 'WhId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      isExpired: 'boolean',
      name: 'string',
      pcaInstanceId: 'string',
      qps: 'number',
      type: 'string',
      whId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertWarehouseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of certificate repositories.
   */
  certWarehouseList?: ListCertWarehouseResponseBodyCertWarehouseList[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 50.
   * 
   * @example
   * 50
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certWarehouseList: 'CertWarehouseList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certWarehouseList: { 'type': 'array', 'itemType': ListCertWarehouseResponseBodyCertWarehouseList },
      currentPage: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certWarehouseList)) {
      $dara.Model.validateArray(this.certWarehouseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

