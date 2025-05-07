// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTensorboardSharedUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID which is used for troubleshooting.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The shareable link of the TensorBoard task.
   * 
   * @example
   * http://pai-dlc-proxy-xxx.alicyuncs.com/xxx/xxx/token/
   */
  tensorboardSharedUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tensorboardSharedUrl: 'TensorboardSharedUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tensorboardSharedUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

