// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertWarehouseRequest extends $dara.Model {
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
   * The repository instance.
   * 
   * @example
   * 14dcc8afc7578e1f
   */
  instanceId?: string;
  /**
   * @remarks
   * The repository name. Fuzzy match is supported.
   * 
   * @example
   * name
   */
  name?: string;
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

