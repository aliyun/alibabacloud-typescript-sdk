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

export class DescribeAbnormalCloudResourcesResponseBodyAbnormalCloudResources extends $dara.Model {
  details?: DescribeAbnormalCloudResourcesResponseBodyAbnormalCloudResourcesDetails[];
  /**
   * @example
   * CertExpired
   */
  reason?: string;
  /**
   * @example
   * lb-***
   */
  resourceInstanceId?: string;
  /**
   * @example
   * test-name
   */
  resourceInstanceName?: string;
  /**
   * @example
   * 80
   */
  resourceInstancePort?: number;
  /**
   * @example
   * clb7
   */
  resourceProduct?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      reason: 'Reason',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceName: 'ResourceInstanceName',
      resourceInstancePort: 'ResourceInstancePort',
      resourceProduct: 'ResourceProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': DescribeAbnormalCloudResourcesResponseBodyAbnormalCloudResourcesDetails },
      reason: 'string',
      resourceInstanceId: 'string',
      resourceInstanceName: 'string',
      resourceInstancePort: 'number',
      resourceProduct: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAbnormalCloudResourcesResponseBody extends $dara.Model {
  abnormalCloudResources?: DescribeAbnormalCloudResourcesResponseBodyAbnormalCloudResources[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalCloudResources: 'AbnormalCloudResources',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalCloudResources: { 'type': 'array', 'itemType': DescribeAbnormalCloudResourcesResponseBodyAbnormalCloudResources },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.abnormalCloudResources)) {
      $dara.Model.validateArray(this.abnormalCloudResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

