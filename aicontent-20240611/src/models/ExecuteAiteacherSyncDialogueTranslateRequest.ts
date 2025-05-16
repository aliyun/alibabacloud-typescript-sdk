// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteAITeacherSyncDialogueTranslateRequestDialogueTasks } from "./ExecuteAiteacherSyncDialogueTranslateRequestDialogueTasks";
import { ExecuteAITeacherSyncDialogueTranslateRequestRecords } from "./ExecuteAiteacherSyncDialogueTranslateRequestRecords";


export class ExecuteAITeacherSyncDialogueTranslateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueTasks?: ExecuteAITeacherSyncDialogueTranslateRequestDialogueTasks[];
  records?: ExecuteAITeacherSyncDialogueTranslateRequestRecords[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 886eba3702xxxxxxxxx4ba52a87a525
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueTasks: 'dialogueTasks',
      records: 'records',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueTasks: { 'type': 'array', 'itemType': ExecuteAITeacherSyncDialogueTranslateRequestDialogueTasks },
      records: { 'type': 'array', 'itemType': ExecuteAITeacherSyncDialogueTranslateRequestRecords },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dialogueTasks)) {
      $dara.Model.validateArray(this.dialogueTasks);
    }
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

