// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledBackupConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  enabled?: number;
  /**
   * @example
   * {"schedule":"0 10 * * 1,2","instance_id":"hgprecn-cn-lbj3dfgog004","week":"1,2","hour":10,"data_keep_quantity":3,"type":"periodical","enabled":true}
   */
  taskParameter?: string;
  /**
   * @example
   * backup
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      taskParameter: 'TaskParameter',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'number',
      taskParameter: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledBackupConfigResponseBody extends $dara.Model {
  data?: GetScheduledBackupConfigResponseBodyData;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 623EF0B6-A6C1-5764-82CC-0BC176654CB9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetScheduledBackupConfigResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

