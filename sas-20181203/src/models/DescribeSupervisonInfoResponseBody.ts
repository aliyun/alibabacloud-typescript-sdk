// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSupervisonInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time of the last system vulnerability scan. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1721134553000
   */
  latestScanTime?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E10BAF1C-A6C5-51E2-866C-76D5922E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      latestScanTime: 'LatestScanTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestScanTime: 'number',
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

