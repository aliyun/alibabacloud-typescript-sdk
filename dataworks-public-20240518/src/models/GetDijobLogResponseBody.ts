// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDIJobLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log.
   * 
   * @example
   * >>>>>>>> stdout:n++++++++++++++++++executing sql: create database if not exists jindo_test location \\"oss://pangbei-hdfs/tmp/hive\\" n++n
   */
  log?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: 'string',
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

