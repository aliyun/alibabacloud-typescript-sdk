// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceScreenshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1gbz20g229bvu5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The Base64-encoded instance screenshot in the JPG format.
   * 
   * @example
   * iVBORw0KGgoA...AAABJRU5ErkJggg==
   */
  screenshot?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      screenshot: 'Screenshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
      screenshot: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

