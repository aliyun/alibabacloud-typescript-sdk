// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBucketsListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which files are stored.
   * 
   * @example
   * bucket_test
   */
  bucket?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
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

export class GetBucketsListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetBucketsListResponseBodyData[];
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify the request. You can use this ID to troubleshoot issues.
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
      data: { 'type': 'array', 'itemType': GetBucketsListResponseBodyData },
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

