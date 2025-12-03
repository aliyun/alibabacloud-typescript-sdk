// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadServerCertificateResponseBodySubjectAlternativeNames extends $dara.Model {
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

export class UploadServerCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AliCloud certificate ID.
   * 
   * @example
   * 775****
   */
  aliCloudCertificateId?: string;
  /**
   * @remarks
   * The AliCloud certificate name.
   * 
   * @example
   * cloudcertificate****
   */
  aliCloudCertificateName?: string;
  /**
   * @remarks
   * The domain name of the CA certificate.
   * 
   * @example
   * example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The time when the CA certificate is uploaded.
   * 
   * @example
   * 2022-02-21T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp generated when the CA certificate is uploaded.
   * 
   * @example
   * 1504147745000
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * The time when the CA certificate expires.
   * 
   * @example
   * 2022-10-18T23:59:59Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The timestamp generated when the CA certificate expires.
   * 
   * @example
   * 1504147745000
   */
  expireTimeStamp?: number;
  /**
   * @remarks
   * The fingerprint of the CA certificate.
   * 
   * @example
   * 8f:7d:cb:e5:f8:c8:33:9c:17:65:c1:92:30:9e:45:55:9c:3a:85:60
   */
  fingerprint?: string;
  /**
   * @remarks
   * Indicates whether the certificate is provided by Alibaba Cloud Certificate Management Service. Valid values:
   * - **0**: The certificate is not provided by Alibaba Cloud Certificate Management Service.
   * - **1**: The certificate is provided by Alibaba Cloud Certificate Management Service.
   * 
   * @example
   * 0
   */
  isAliCloudCertificate?: number;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rt****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the server certificate.
   * 
   * @example
   * 1321932713******_17f1b4b696b_1114720822_-1671******
   */
  serverCertificateId?: string;
  /**
   * @remarks
   * The name of the server certificate.
   * 
   * The name must be 1 to 80 characters in length. It must start with an English letter. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * mycert01
   */
  serverCertificateName?: string;
  /**
   * @remarks
   * The subject alternative names.
   * 
   * A domain name list is supported. A maximum of 10 domain names are supported.
   */
  subjectAlternativeNames?: UploadServerCertificateResponseBodySubjectAlternativeNames;
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
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      serverCertificateId: 'ServerCertificateId',
      serverCertificateName: 'ServerCertificateName',
      subjectAlternativeNames: 'SubjectAlternativeNames',
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
      requestId: 'string',
      resourceGroupId: 'string',
      serverCertificateId: 'string',
      serverCertificateName: 'string',
      subjectAlternativeNames: UploadServerCertificateResponseBodySubjectAlternativeNames,
    };
  }

  validate() {
    if(this.subjectAlternativeNames && typeof (this.subjectAlternativeNames as any).validate === 'function') {
      (this.subjectAlternativeNames as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

