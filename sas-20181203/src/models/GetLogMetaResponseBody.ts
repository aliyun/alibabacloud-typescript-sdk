// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogMetaResponseBodyLogMeta extends $dara.Model {
  /**
   * @remarks
   * The name of the dedicated Logstore in which logs are stored.
   * 
   * @example
   * aegis-log-login
   */
  logStore?: string;
  /**
   * @remarks
   * The Simple Log Service project.
   * 
   * @example
   * sas-log
   */
  project?: string;
  /**
   * @remarks
   * The status of a data shipping task of a log. Valid values:
   * 
   * *   **enabled**
   * *   **disabled**
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      project: 'Project',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      project: 'string',
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

export class GetLogMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data of a data shipping task.
   */
  logMeta?: GetLogMetaResponseBodyLogMeta;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3956048F-9D73-5EDB-834B-4827BB48****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logMeta: 'LogMeta',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logMeta: GetLogMetaResponseBodyLogMeta,
      requestId: 'string',
    };
  }

  validate() {
    if(this.logMeta && typeof (this.logMeta as any).validate === 'function') {
      (this.logMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

