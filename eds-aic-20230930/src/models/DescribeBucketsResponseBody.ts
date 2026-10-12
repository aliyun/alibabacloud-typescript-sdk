// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBucketsResponseBodyDataOssObjectListOwner extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket owner.
   * 
   * @example
   * Jiayu
   */
  displayName?: string;
  /**
   * @remarks
   * The unique identifier of the bucket owner.
   * 
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
   * @remarks
   * The bucket name.
   * 
   * @example
   * tf-testacceu-central-1ensbucketlifecycle44222
   */
  bucketName?: string;
  /**
   * @remarks
   * The ETag (Entity Tag) is created when an object is generated and is used to identify the content of the object.
   * 
   * - For an object created by a PutObject request, the ETag is the MD5 hash of the object content.
   * 
   * - For an object created by other methods, the ETag is a unique value generated based on specific calculation rules, but it is not the MD5 hash of the object content.
   * 
   * - You can use the ETag to check whether the object content has changed. Do not use the ETag as the MD5 hash to verify the data integrity of the object content.
   * 
   * @example
   * 5B3C1A2E053D763E1B002CC607C5A0FE1****
   */
  ETag?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * con
   */
  key?: string;
  /**
   * @remarks
   * The time when the object was last modified.
   * 
   * @example
   * 2012-02-24T08:42:32.000Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The bucket owner information.
   */
  owner?: DescribeBucketsResponseBodyDataOssObjectListOwner;
  /**
   * @remarks
   * The database restoration information when the restored database type is MSSQL. The value is a JSON string that contains the following fields:
   * - **name**: The database name.
   * - **files**: The database file path.
   * 
   * @example
   * ongoing-request="true"
   */
  restoreInfo?: string;
  /**
   * @remarks
   * The file size. Unit: KB.
   * 
   * @example
   * 9
   */
  size?: number;
  /**
   * @remarks
   * The storage class of the bucket. Valid values:
   * 
   * - Standard: Standard storage (default).
   * - IA: Infrequent Access.
   * - Archive: Archive.
   * - ColdArchive: Cold Archive.
   * - DeepColdArchive: Deep Cold Archive.
   * 
   * @example
   * ARCHIVE
   */
  storageClass?: string;
  /**
   * @remarks
   * The trigger type.
   * 
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
   * @remarks
   * The bucket name.
   * 
   * @example
   * zydctest
   */
  bucketName?: string;
  /**
   * @remarks
   * The public endpoint used to access the bucket.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  extranetEndpoint?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-05-15 17:33:59
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The internal endpoint used by ECS instances in the same region to access the bucket.
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * The storage path, such as HDFS or OSS.
   * 
   * @example
   * center
   */
  location?: string;
  /**
   * @remarks
   * The information about objects in the bucket.
   */
  ossObjectList?: DescribeBucketsResponseBodyDataOssObjectList[];
  /**
   * @remarks
   * The region ID.
   * 
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
   * @remarks
   * The error code.
   * 
   * > This parameter is returned only when an error occurs during the API call.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result object.
   */
  data?: DescribeBucketsResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result.
   * 
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

