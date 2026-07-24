// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScanNumResponseBody extends $dara.Model {
  /**
   * @remarks
   * The upper limit on the number.
   * 
   * @example
   * 10
   */
  limitNumber?: number;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of files pending detection.
   * 
   * @example
   * 10
   */
  scanNumber?: number;
  /**
   * @remarks
   * The total number of files.
   * 
   * @example
   * 10
   */
  sumNumber?: number;
  /**
   * @remarks
   * Indicates whether the user is a whitelisted user.
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

