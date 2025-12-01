// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreOssImageResponseBody extends $dara.Model {
  /**
   * @example
   * 208B016D-4CB9-4A85-96A5-0B8ED1EBF271
   */
  requestId?: string;
  /**
   * @example
   * aliyun_dsc_original /dir1/test.png
   */
  restoredImageKey?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoredImageKey: 'RestoredImageKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoredImageKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

