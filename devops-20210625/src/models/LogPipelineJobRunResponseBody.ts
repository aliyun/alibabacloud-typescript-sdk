// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogPipelineJobRunResponseBodyLog extends $dara.Model {
  /**
   * @example
   * success
   */
  content?: string;
  /**
   * @example
   * true
   */
  more?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      more: 'more',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      more: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogPipelineJobRunResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  log?: LogPipelineJobRunResponseBodyLog;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      log: 'log',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      log: LogPipelineJobRunResponseBodyLog,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.log && typeof (this.log as any).validate === 'function') {
      (this.log as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

