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
  tagKey?: string;
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
  aliCloudCertificateId?: string;
  aliCloudCertificateName?: string;
  commonName?: string;
  createTime?: string;
  createTimeStamp?: number;
  expireTime?: string;
  expireTimeStamp?: number;
  fingerprint?: string;
  isAliCloudCertificate?: number;
  regionId?: string;
  resourceGroupId?: string;
  serverCertificateId?: string;
  serverCertificateName?: string;
  subjectAlternativeNames?: DescribeServerCertificatesResponseBodyServerCertificatesServerCertificateSubjectAlternativeNames;
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

