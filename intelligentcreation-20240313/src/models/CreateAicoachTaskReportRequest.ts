// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAICoachTaskReportRequestDialogueList extends $dara.Model {
  message?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

export class CreateAICoachTaskReportRequest extends $dara.Model {
  dialogueList?: CreateAICoachTaskReportRequestDialogueList[];
  idempotentId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueList: 'dialogueList',
      idempotentId: 'idempotentId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueList: { 'type': 'array', 'itemType': CreateAICoachTaskReportRequestDialogueList },
      idempotentId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

