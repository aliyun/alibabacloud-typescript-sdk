// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOssBucketResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * iboxpublic****
   */
  bucketName?: string;
  /**
   * @remarks
   * The reason why the bucket cannot be checked.
   * 
   * @example
   * Unsupported Region.
   */
  message?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The storage class of the bucket. Valid values:
   * 
   * *   Standard (default)
   * *   IA
   * *   Archive
   * *   ColdArchive
   * 
   * @example
   * Standard
   */
  storageClass?: string;
  /**
   * @remarks
   * Indicates whether the bucket can be checked. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  support?: boolean;
  /**
   * @remarks
   * Whether to support config. Valid values:
   * 
   * * true
   * * false
   * 
   * @example
   * true
   */
  supportConfig?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      message: 'Message',
      regionId: 'RegionId',
      storageClass: 'StorageClass',
      support: 'Support',
      supportConfig: 'SupportConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      message: 'string',
      regionId: 'string',
      storageClass: 'string',
      support: 'boolean',
      supportConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOssBucketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListOssBucketResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3956048F-9D73-5EDB-834B-4827BB48****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListOssBucketResponseBodyData },
      requestId: 'string',
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

