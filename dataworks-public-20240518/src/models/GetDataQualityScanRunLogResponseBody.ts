// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityScanRunLogResponseBodyLogSegment extends $dara.Model {
  /**
   * @remarks
   * The task log.
   * 
   * @example
   * Running on Serverless_resource_group_xxxxx
   * Begin to check rule ***
   */
  log?: string;
  /**
   * @remarks
   * The starting offset of the next log segment. A value of -1 indicates that all logs have been read.
   * 
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
  /**
   * @remarks
   * The task log information.
   */
  logSegment?: GetDataQualityScanRunLogResponseBodyLogSegment;
  /**
   * @remarks
   * The request ID.
   * 
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

