// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportTaskStatusResponseBody extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  gmtCreate?: string;
  gmtModified?: string;
  outRequestNo?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      outRequestNo: 'outRequestNo',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      outRequestNo: 'string',
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

