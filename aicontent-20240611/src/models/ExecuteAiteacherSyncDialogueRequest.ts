// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteAITeacherSyncDialogueRequestDialogueTasks } from "./ExecuteAiteacherSyncDialogueRequestDialogueTasks";
import { ExecuteAITeacherSyncDialogueRequestRecords } from "./ExecuteAiteacherSyncDialogueRequestRecords";


export class ExecuteAITeacherSyncDialogueRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueTasks?: ExecuteAITeacherSyncDialogueRequestDialogueTasks[];
  /**
   * @example
   * en-gb
   */
  languageCode?: string;
  records?: ExecuteAITeacherSyncDialogueRequestRecords[];
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
      languageCode: 'languageCode',
      records: 'records',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueTasks: { 'type': 'array', 'itemType': ExecuteAITeacherSyncDialogueRequestDialogueTasks },
      languageCode: 'string',
      records: { 'type': 'array', 'itemType': ExecuteAITeacherSyncDialogueRequestRecords },
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

