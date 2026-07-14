// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryReportTaskResponseBody extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  outRequestNo?: string;
  retryAvailable?: boolean;
  retryCount?: number;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      outRequestNo: 'outRequestNo',
      retryAvailable: 'retryAvailable',
      retryCount: 'retryCount',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      outRequestNo: 'string',
      retryAvailable: 'boolean',
      retryCount: 'number',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

