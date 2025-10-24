// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBucketsResponseBodyDataOssObjectListOwner extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * 395
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBucketsResponseBodyDataOssObjectList extends $dara.Model {
  /**
   * @example
   * tf-testacceu-central-1ensbucketlifecycle44222
   */
  bucketName?: string;
  /**
   * @example
   * 5B3C1A2E053D763E1B002CC607C5A0FE1****
   */
  ETag?: string;
  /**
   * @example
   * con
   */
  key?: string;
  /**
   * @example
   * 2012-02-24T08:42:32.000Z
   */
  lastModified?: string;
  owner?: DescribeBucketsResponseBodyDataOssObjectListOwner;
  /**
   * @example
   * ongoing-request="true"
   */
  restoreInfo?: string;
  /**
   * @example
   * 9
   */
  size?: number;
  /**
   * @example
   * ARCHIVE
   */
  storageClass?: string;
  /**
   * @example
   * InstanceGroup
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      ETag: 'ETag',
      key: 'Key',
      lastModified: 'LastModified',
      owner: 'Owner',
      restoreInfo: 'RestoreInfo',
      size: 'Size',
      storageClass: 'StorageClass',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      ETag: 'string',
      key: 'string',
      lastModified: 'string',
      owner: DescribeBucketsResponseBodyDataOssObjectListOwner,
      restoreInfo: 'string',
      size: 'number',
      storageClass: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.owner && typeof (this.owner as any).validate === 'function') {
      (this.owner as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBucketsResponseBodyData extends $dara.Model {
  /**
   * @example
   * zydctest
   */
  bucketName?: string;
  /**
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  extranetEndpoint?: string;
  /**
   * @example
   * 2024-05-15 17:33:59
   */
  gmtCreated?: string;
  /**
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  intranetEndpoint?: string;
  /**
   * @example
   * center
   */
  location?: string;
  ossObjectList?: DescribeBucketsResponseBodyDataOssObjectList[];
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      extranetEndpoint: 'ExtranetEndpoint',
      gmtCreated: 'GmtCreated',
      intranetEndpoint: 'IntranetEndpoint',
      location: 'Location',
      ossObjectList: 'OssObjectList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      extranetEndpoint: 'string',
      gmtCreated: 'string',
      intranetEndpoint: 'string',
      location: 'string',
      ossObjectList: { 'type': 'array', 'itemType': DescribeBucketsResponseBodyDataOssObjectList },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ossObjectList)) {
      $dara.Model.validateArray(this.ossObjectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBucketsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeBucketsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success.
   */
  message?: string;
  /**
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeBucketsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

