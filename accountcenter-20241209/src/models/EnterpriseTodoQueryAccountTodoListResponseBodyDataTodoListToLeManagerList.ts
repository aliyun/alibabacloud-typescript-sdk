// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseTodoQueryAccountTodoListResponseBodyDataTodoListToLeManagerList extends $dara.Model {
  aliyunId?: string;
  pk?: string;
  pkEncoded?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      pk: 'Pk',
      pkEncoded: 'PkEncoded',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
      pk: 'string',
      pkEncoded: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

