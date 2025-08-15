// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOssBucketResponseBodyData extends $dara.Model {
  /**
   * @example
   * testBucket******
   */
  bucketName?: string;
  /**
   * @example
   * Unsupported Region。
   */
  message?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * IA
   */
  storageClass?: string;
  /**
   * @example
   * true
   */
  support?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      message: 'Message',
      regionId: 'RegionId',
      storageClass: 'StorageClass',
      support: 'Support',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      message: 'string',
      regionId: 'string',
      storageClass: 'string',
      support: 'boolean',
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
  data?: ListOssBucketResponseBodyData[];
  /**
   * @example
   * E14CECBF-8CAC-520C-ACC3-9503D5******
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

