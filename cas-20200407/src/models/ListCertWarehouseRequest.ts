// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertWarehouseRequest extends $dara.Model {
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
   * The instance ID of the certificate application repository.
   * 
   * @example
   * 14dcc8afc7578e1f
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the certificate application repository. Fuzzy match is supported.
   * 
   * @example
   * name
   */
  name?: string;
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
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      name: 'Name',
      showSize: 'ShowSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'string',
      name: 'string',
      showSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

