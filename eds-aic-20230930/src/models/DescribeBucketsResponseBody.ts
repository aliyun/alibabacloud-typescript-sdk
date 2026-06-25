// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBucketsResponseBodyDataOssObjectListOwner extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket owner.
   * 
   * @example
   * 佳钰
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
   * The name of the bucket.
   * 
   * @example
   * tf-testacceu-central-1ensbucketlifecycle44222
   */
  bucketName?: string;
  /**
   * @remarks
   * The Entity Tag (ETag) is created when an object is generated. It is used to identify the content of an object.
   * 
   * - For an object created by a PutObject request, the ETag value is the MD5 hash of the object content.
   * 
   * - For an object created by other methods, the ETag value is a unique value generated based on specific calculation rules. It is not the MD5 hash of the object content.
   * 
   * - The ETag value can be used to check if the object content has changed. Do not use the ETag value as the MD5 hash to verify the data integrity of the object.
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
   * The information about the bucket owner.
   */
  owner?: DescribeBucketsResponseBodyDataOssObjectListOwner;
  /**
   * @remarks
   * The information about database recovery if the database type is MSSQL. The value is a JSON string that contains the following parameters:
   * 
   * - **name**: The name of the database.
   * 
   * - **files**: The path of the database file.
   * 
   * @example
   * ongoing-request="true"
   */
  restoreInfo?: string;
  /**
   * @remarks
   * The size of the file. Unit: KB.
   * 
   * @example
   * 9
   */
  size?: number;
  /**
   * @remarks
   * The storage class of the bucket. Valid values:
   * 
   * - Standard (default): Standard
   * 
   * - IA: Infrequent Access
   * 
   * - Archive: Archive Storage
   * 
   * - ColdArchive: Cold Archive
   * 
   * - DeepColdArchive: Deep Cold Archive
   * 
   * @example
   * ARCHIVE
   */
  storageClass?: string;
  /**
   * @remarks
   * The type of the trigger method.
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
   * The name of the bucket.
   * 
   * @example
   * zydctest
   */
  bucketName?: string;
  /**
   * @remarks
   * The public endpoint that is used to access the bucket.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  extranetEndpoint?: string;
  /**
   * @remarks
   * The time when the bucket was created.
   * 
   * @example
   * 2024-05-15 17:33:59
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The internal endpoint that is used by a same-region ECS instance to access the bucket.
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * The storage path, such as a path in Hadoop Distributed File System (HDFS) or OSS.
   * 
   * @example
   * center
   */
  location?: string;
  /**
   * @remarks
   * The information about the objects in the bucket.
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
   * > This parameter is returned only when the call fails.
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
   * The return status code of the request.
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
   * The result of the request.
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

