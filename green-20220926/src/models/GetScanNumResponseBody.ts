// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScanNumResponseBody extends $dara.Model {
  /**
   * @remarks
   * Upper limit of the quantity.
   * 
   * @example
   * 10
   */
  limitNumber?: number;
  /**
   * @remarks
   * ID assigned by the backend, used to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of files pending inspection.
   * 
   * @example
   * 10
   */
  scanNumber?: number;
  /**
   * @remarks
   * Total number of files.
   * 
   * @example
   * 10
   */
  sumNumber?: number;
  /**
   * @remarks
   * Whether it is a whitelist user.
   * 
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

