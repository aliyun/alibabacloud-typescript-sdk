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

export class ListDiagnosisResponseBody extends $dara.Model {
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListDiagnosisResponseBodyData[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDiagnosisResponseBodyData },
      message: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

