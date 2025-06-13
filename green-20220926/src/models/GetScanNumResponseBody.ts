// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScanNumResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  limitNumber?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  scanNumber?: number;
  /**
   * @example
   * 10
   */
  sumNumber?: number;
  /**
   * @example
   * True
   */
  tag?: boolean;
  static names(): { [key: string]: string } {
    return {
      limitNumber: 'LimitNumber',
      requestId: 'RequestId',
      scanNumber: 'ScanNumber',
      sumNumber: 'SumNumber',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limitNumber: 'number',
      requestId: 'string',
      scanNumber: 'number',
      sumNumber: 'number',
      tag: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

