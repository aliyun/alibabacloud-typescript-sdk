// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCACertificatesResponseBodyCACertificatesCACertificateTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
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
  /**
   * @remarks
   * The CA certificate ID.
   * 
   * @example
   * 139a00604bd-cn-east-hangzho****
   */
  CACertificateId?: string;
  /**
   * @remarks
   * The CA certificate name.
   * 
   * @example
   * test
   */
  CACertificateName?: string;
  /**
   * @remarks
   * The domain name of the CA certificate.
   * 
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The time when the CA certificate was created. The time is in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2021-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp when the CA certificate was created. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1504147745000
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * The time when the CA certificate expires. The time is in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2024-11-21T06:04:25Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the CA certificate expires. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1732169065000
   */
  expireTimeStamp?: number;
  /**
   * @remarks
   * The fingerprint of the CA certificate.
   * 
   * @example
   * 79:43:fb:7d:a4:7f:44:32:61:16:57:17:e3:e8:b7:36:03:57:f6:89
   */
  fingerprint?: string;
  /**
   * @remarks
   * The region of the CA certificate.
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
   * The tag.
   */
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
  /**
   * @remarks
   * The information about the CA certificate.
   */
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

