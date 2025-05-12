// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagePermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the Alibaba Cloud accounts with which the image is shared.
   */
  aliUids?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUids: 'AliUids',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUids: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliUids)) {
      $dara.Model.validateArray(this.aliUids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

