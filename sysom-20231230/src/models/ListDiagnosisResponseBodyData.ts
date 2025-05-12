// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosisResponseBodyData extends $dara.Model {
  code?: number;
  command?: any;
  createdAt?: string;
  errMsg?: string;
  params?: any;
  result?: any;
  serviceName?: string;
  status?: string;
  taskId?: string;
  updatedAt?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      command: 'command',
      createdAt: 'created_at',
      errMsg: 'err_msg',
      params: 'params',
      result: 'result',
      serviceName: 'service_name',
      status: 'status',
      taskId: 'task_id',
      updatedAt: 'updated_at',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      command: 'any',
      createdAt: 'string',
      errMsg: 'string',
      params: 'any',
      result: 'any',
      serviceName: 'string',
      status: 'string',
      taskId: 'string',
      updatedAt: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

