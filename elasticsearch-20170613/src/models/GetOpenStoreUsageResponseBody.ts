// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpenStoreUsageResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The current OpenStore storage usage, which is an estimated value based on actual indexes. Unit: bytes.
   * 
   * @example
   * 204800
   */
  currentUsage?: number;
  /**
   * @remarks
   * The OpenStore storage usage on the previous day. Unit: bytes.
   * 
   * @example
   * 184320
   */
  lastDayUsage?: number;
  static names(): { [key: string]: string } {
    return {
      currentUsage: 'currentUsage',
      lastDayUsage: 'lastDayUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentUsage: 'number',
      lastDayUsage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenStoreUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E1DE2491-804F-4C86-BAB4-548DD70B****
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the current request.
   */
  result?: GetOpenStoreUsageResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetOpenStoreUsageResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

