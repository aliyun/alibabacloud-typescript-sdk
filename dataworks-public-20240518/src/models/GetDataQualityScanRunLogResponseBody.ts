// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityScanRunLogResponseBodyLogSegment extends $dara.Model {
  log?: string;
  /**
   * @example
   * 512000
   */
  nextOffset?: number;
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
      nextOffset: 'NextOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: 'string',
      nextOffset: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataQualityScanRunLogResponseBody extends $dara.Model {
  logSegment?: GetDataQualityScanRunLogResponseBodyLogSegment;
  /**
   * @example
   * 0bc14115***159376359
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logSegment: 'LogSegment',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logSegment: GetDataQualityScanRunLogResponseBodyLogSegment,
      requestId: 'string',
    };
  }

  validate() {
    if(this.logSegment && typeof (this.logSegment as any).validate === 'function') {
      (this.logSegment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

