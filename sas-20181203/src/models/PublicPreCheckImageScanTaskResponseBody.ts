// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicPreCheckImageScanTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of images to scan in the task.
   * 
   * @example
   * 6
   */
  needAuthCount?: number;
  /**
   * @remarks
   * The quota for container image scan to be consumed by the task.
   * 
   * @example
   * 3
   */
  scanImageCount?: number;
  static names(): { [key: string]: string } {
    return {
      needAuthCount: 'NeedAuthCount',
      scanImageCount: 'ScanImageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needAuthCount: 'number',
      scanImageCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublicPreCheckImageScanTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned if the call is successful.
   */
  data?: PublicPreCheckImageScanTaskResponseBodyData;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * F9353221-40F4-5F98-B73C-2803DC804033
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
      data: PublicPreCheckImageScanTaskResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

