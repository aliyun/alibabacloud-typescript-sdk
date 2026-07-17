// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowQueryStatusResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 100298370
   */
  appGroupId?: string;
  /**
   * @remarks
   * The region.
   * 
   * - outer: Public network
   * 
   * - internal: Internal network
   * 
   * @example
   * internal
   */
  region?: string;
  /**
   * @remarks
   * The activation status.
   * 
   * - enabled: Enabled
   * 
   * - disabled: Disabled
   * 
   * - n/a: Unknown
   * 
   * @example
   * disabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'appGroupId',
      region: 'region',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'string',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowQueryStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5C1C1C45-C64A-AD30-565F-140871D57E5E
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
  result?: DescribeSlowQueryStatusResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeSlowQueryStatusResponseBodyResult,
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

