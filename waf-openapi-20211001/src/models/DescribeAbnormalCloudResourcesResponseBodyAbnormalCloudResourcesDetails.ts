// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAbnormalCloudResourcesResponseBodyAbnormalCloudResourcesDetails extends $dara.Model {
  /**
   * @example
   * default
   */
  appliedType?: string;
  /**
   * @example
   * test-name
   */
  certName?: string;
  /**
   * @example
   * CertExpired
   */
  code?: string;
  /**
   * @example
   * www.test.com
   */
  commonName?: string;
  /**
   * @example
   * 1735009193
   */
  expireTime?: number;
  /**
   * @example
   * 123-cn-hangzhou
   */
  productCertId?: string;
  /**
   * @example
   * test-name
   */
  productCertName?: string;
  /**
   * @example
   * www.test.com
   */
  productDomainExtension?: string;
  static names(): { [key: string]: string } {
    return {
      appliedType: 'AppliedType',
      certName: 'CertName',
      code: 'Code',
      commonName: 'CommonName',
      expireTime: 'ExpireTime',
      productCertId: 'ProductCertId',
      productCertName: 'ProductCertName',
      productDomainExtension: 'ProductDomainExtension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedType: 'string',
      certName: 'string',
      code: 'string',
      commonName: 'string',
      expireTime: 'number',
      productCertId: 'string',
      productCertName: 'string',
      productDomainExtension: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

