// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteAITeacherExpansionDialogueTranslateRequestDialogueTasks } from "./ExecuteAiteacherExpansionDialogueTranslateRequestDialogueTasks";
import { ExecuteAITeacherExpansionDialogueTranslateRequestRecords } from "./ExecuteAiteacherExpansionDialogueTranslateRequestRecords";
import { ExecuteAITeacherExpansionDialogueTranslateRequestRoleInfo } from "./ExecuteAiteacherExpansionDialogueTranslateRequestRoleInfo";


export class ExecuteAITeacherExpansionDialogueTranslateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * In this dialogue, you will be playing the role of Lily, a young girl. I will be Jane, Lily\\"s mother. We are in the kitchen, where I am preparing dinner. I am asking you about your food preferences, specifically if you like meat, fish, and milk. You like meat and milk, but you don\\"t like fish because of its smell. I explain to you the nutritional benefits of these foods and suggest alternatives for the ones you don\\"t like. Finally, I invite you to start eating.
   */
  background?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueTasks?: ExecuteAITeacherExpansionDialogueTranslateRequestDialogueTasks[];
  records?: ExecuteAITeacherExpansionDialogueTranslateRequestRecords[];
  /**
   * @remarks
   * This parameter is required.
   */
  roleInfo?: ExecuteAITeacherExpansionDialogueTranslateRequestRoleInfo;
  /**
   * @example
   * Hello Lily, could you please come to the kitchen for a moment?
   */
  startSentence?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * talk about food.
   */
  topic?: string;
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
      background: 'background',
      dialogueTasks: 'dialogueTasks',
      records: 'records',
      roleInfo: 'roleInfo',
      startSentence: 'startSentence',
      topic: 'topic',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      background: 'string',
      dialogueTasks: { 'type': 'array', 'itemType': ExecuteAITeacherExpansionDialogueTranslateRequestDialogueTasks },
      records: { 'type': 'array', 'itemType': ExecuteAITeacherExpansionDialogueTranslateRequestRecords },
      roleInfo: ExecuteAITeacherExpansionDialogueTranslateRequestRoleInfo,
      startSentence: 'string',
      topic: 'string',
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
    if(this.roleInfo && typeof (this.roleInfo as any).validate === 'function') {
      (this.roleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

