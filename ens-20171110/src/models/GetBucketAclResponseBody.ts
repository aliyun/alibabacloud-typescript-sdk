// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBucketAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACL of the bucket.
   * 
   * @example
   * private
   */
  bucketAcl?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5C881388-2D4B-46F4-A96B-D4E6BD0886A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketAcl: 'BucketAcl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketAcl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

