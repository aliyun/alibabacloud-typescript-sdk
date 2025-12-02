// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBackupBucketsListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * OSS file storage bucket name.
   * 
   * @example
   * gj-bucket1
   */
  bucket?: string;
  /**
   * @remarks
   * Region.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupBucketsListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data.
   */
  data?: GetBackupBucketsListResponseBodyData[];
  /**
   * @remarks
   * Backend-assigned ID, used to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
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
      data: { 'type': 'array', 'itemType': GetBackupBucketsListResponseBodyData },
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

