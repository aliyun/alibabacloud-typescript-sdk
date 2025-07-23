// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertWarehouseResponseBodyCertWarehouseList extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the certificate application repository expires. Unit: milliseconds.
   * 
   * @example
   * 1665819958000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID of the certificate application repository.
   * 
   * @example
   * 14dcc8afc7578e1f
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the certificate application repository has expired. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isExpired?: boolean;
  /**
   * @remarks
   * The name of the certificate application repository.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The instance ID of the private CA.
   * 
   * @example
   * 14dcc8afc7578e1f
   */
  pcaInstanceId?: string;
  /**
   * @remarks
   * The queries per second (QPS).
   * 
   * @example
   * 10
   */
  qps?: number;
  /**
   * @remarks
   * The type of the certificate application repository. Valid values:
   * 
   * *   **ssl**: certificate application repository of SSL certificates
   * *   **uploadPCA**: certificate application repository of uploaded private certificates
   * *   **free**: certificate application repository of free certificates, available only on the China site (aliyun.com)
   * *   **aliyunPCA**: certificate application repository of private certificates purchased from Alibaba Cloud Private Certificate Authority (PCA), available only on the China site (aliyun.com)
   * *   **disable**: disabled certificate application repository
   * 
   * @example
   * aliyunPCA
   */
  type?: string;
  /**
   * @remarks
   * The ID of the certificate application repository.
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
   * The certificate application repositories.
   */
  certWarehouseList?: ListCertWarehouseResponseBodyCertWarehouseList[];
  /**
   * @remarks
   * The page number of the returned page. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 50.
   * 
   * @example
   * 50
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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

