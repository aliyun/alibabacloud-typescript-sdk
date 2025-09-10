// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLogStoreLogsTask extends $dara.Model {
  errorCode?: number;
  errorMessage?: string;
  from?: number;
  progress?: number;
  query?: string;
  taskId?: string;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      from: 'from',
      progress: 'progress',
      query: 'query',
      taskId: 'taskId',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      errorMessage: 'string',
      from: 'number',
      progress: 'number',
      query: 'string',
      taskId: 'string',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

