// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCACertificatesResponseBodyCACertificatesCACertificateTagsTag extends $dara.Model {
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

export class DescribeCACertificatesResponseBodyCACertificatesCACertificateTags extends $dara.Model {
  tag?: DescribeCACertificatesResponseBodyCACertificatesCACertificateTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeCACertificatesResponseBodyCACertificatesCACertificateTagsTag },
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

export class DescribeCACertificatesResponseBodyCACertificatesCACertificate extends $dara.Model {
  CACertificateId?: string;
  CACertificateName?: string;
  commonName?: string;
  createTime?: string;
  createTimeStamp?: number;
  expireTime?: string;
  expireTimeStamp?: number;
  fingerprint?: string;
  regionId?: string;
  resourceGroupId?: string;
  tags?: DescribeCACertificatesResponseBodyCACertificatesCACertificateTags;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      CACertificateName: 'CACertificateName',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      expireTime: 'ExpireTime',
      expireTimeStamp: 'ExpireTimeStamp',
      fingerprint: 'Fingerprint',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      CACertificateName: 'string',
      commonName: 'string',
      createTime: 'string',
      createTimeStamp: 'number',
      expireTime: 'string',
      expireTimeStamp: 'number',
      fingerprint: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: DescribeCACertificatesResponseBodyCACertificatesCACertificateTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificatesResponseBodyCACertificates extends $dara.Model {
  CACertificate?: DescribeCACertificatesResponseBodyCACertificatesCACertificate[];
  static names(): { [key: string]: string } {
    return {
      CACertificate: 'CACertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificate: { 'type': 'array', 'itemType': DescribeCACertificatesResponseBodyCACertificatesCACertificate },
    };
  }

  validate() {
    if(Array.isArray(this.CACertificate)) {
      $dara.Model.validateArray(this.CACertificate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCACertificatesResponseBody extends $dara.Model {
  CACertificates?: DescribeCACertificatesResponseBodyCACertificates;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      CACertificates: 'CACertificates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificates: DescribeCACertificatesResponseBodyCACertificates,
      requestId: 'string',
    };
  }

  validate() {
    if(this.CACertificates && typeof (this.CACertificates as any).validate === 'function') {
      (this.CACertificates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

