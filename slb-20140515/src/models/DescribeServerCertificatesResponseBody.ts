// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateSubjectAlternativeNames extends $dara.Model {
  subjectAlternativeName?: string[];
  static names(): { [key: string]: string } {
    return {
      subjectAlternativeName: 'SubjectAlternativeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subjectAlternativeName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.subjectAlternativeName)) {
      $dara.Model.validateArray(this.subjectAlternativeName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag keys of the resource.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateTags extends $dara.Model {
  tag?: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponseBodyServerCertificatesServerCertificate extends $dara.Model {
  /**
   * @remarks
   * The ID of the server certificate from Alibaba Cloud Certificate Management Service.
   * 
   * @example
   * 7309********_15d97e7709a_71445759hr_789289731
   */
  aliCloudCertificateId?: string;
  /**
   * @remarks
   * The name of the server certificate from Alibaba Cloud Certificate Management Service.
   * 
   * @example
   * testcertkey
   */
  aliCloudCertificateName?: string;
  /**
   * @remarks
   * The domain name of the server certificate. The domain name is specified in the `CommonName` field.
   * 
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The time when the server certificate was uploaded.
   * 
   * @example
   * 2021-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp when the server certificate was uploaded.
   * 
   * @example
   * 1504147745000
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * The time when the server certificate expires.
   * 
   * @example
   * 2023-01-26T23:59:59Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The timestamp when the server certificate expires.
   * 
   * @example
   * 15041477450
   */
  expireTimeStamp?: number;
  /**
   * @remarks
   * The fingerprint of the server certificate.
   * 
   * @example
   * 68:08:1a:f8:2c:97:69:a3:a1:e6:16:41:4b:ca:4f:5d:ee:a5:ef:0d
   */
  fingerprint?: string;
  /**
   * @remarks
   * Indicates whether the server certificate is from Alibaba Cloud Certificate Management Service. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  isAliCloudCertificate?: number;
  /**
   * @remarks
   * The region ID of the server certificate.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The server certificate ID.
   * 
   * @example
   * 123157********_166f8204689_1714763408_709981430-cn-east-hangzhou-02
   */
  serverCertificateId?: string;
  /**
   * @remarks
   * The name of the server certificate.
   * 
   * @example
   * slb
   */
  serverCertificateName?: string;
  /**
   * @remarks
   * The alternative domain names of the server certificate. The alternative domain names are specified in the Subject Alternative Name field of the server certificate.
   */
  subjectAlternativeNames?: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateSubjectAlternativeNames;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateTags;
  static names(): { [key: string]: string } {
    return {
      aliCloudCertificateId: 'AliCloudCertificateId',
      aliCloudCertificateName: 'AliCloudCertificateName',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      expireTime: 'ExpireTime',
      expireTimeStamp: 'ExpireTimeStamp',
      fingerprint: 'Fingerprint',
      isAliCloudCertificate: 'IsAliCloudCertificate',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serverCertificateId: 'ServerCertificateId',
      serverCertificateName: 'ServerCertificateName',
      subjectAlternativeNames: 'SubjectAlternativeNames',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliCloudCertificateId: 'string',
      aliCloudCertificateName: 'string',
      commonName: 'string',
      createTime: 'string',
      createTimeStamp: 'number',
      expireTime: 'string',
      expireTimeStamp: 'number',
      fingerprint: 'string',
      isAliCloudCertificate: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      serverCertificateId: 'string',
      serverCertificateName: 'string',
      subjectAlternativeNames: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateSubjectAlternativeNames,
      tags: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateTags,
    };
  }

  validate() {
    if(this.subjectAlternativeNames && typeof (this.subjectAlternativeNames as any).validate === 'function') {
      (this.subjectAlternativeNames as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponseBodyServerCertificates extends $dara.Model {
  serverCertificate?: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificate[];
  static names(): { [key: string]: string } {
    return {
      serverCertificate: 'ServerCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverCertificate: { 'type': 'array', 'itemType': DescribeServerCertificatesResponseBodyServerCertificatesServerCertificate },
    };
  }

  validate() {
    if(Array.isArray(this.serverCertificate)) {
      $dara.Model.validateArray(this.serverCertificate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServerCertificatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The server certificates.
   */
  serverCertificates?: DescribeServerCertificatesResponseBodyServerCertificates;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serverCertificates: 'ServerCertificates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serverCertificates: DescribeServerCertificatesResponseBodyServerCertificates,
    };
  }

  validate() {
    if(this.serverCertificates && typeof (this.serverCertificates as any).validate === 'function') {
      (this.serverCertificates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

