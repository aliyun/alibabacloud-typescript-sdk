// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseTodoQueryAccountTodoListByApplicantResponseBodyDataTodoListProcessList extends $dara.Model {
  aliyunId?: string;
  auditTime?: number;
  ecId?: string;
  leId?: string;
  nbId?: string;
  pk?: string;
  remark?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      auditTime: 'AuditTime',
      ecId: 'EcId',
      leId: 'LeId',
      nbId: 'NbId',
      pk: 'Pk',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
      auditTime: 'number',
      ecId: 'string',
      leId: 'string',
      nbId: 'string',
      pk: 'string',
      remark: 'string',
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

