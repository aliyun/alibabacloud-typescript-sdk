// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAITeacherSyncDialogueSuggestionRequestDialogueTasks } from "./GetAiteacherSyncDialogueSuggestionRequestDialogueTasks";
import { GetAITeacherSyncDialogueSuggestionRequestRecords } from "./GetAiteacherSyncDialogueSuggestionRequestRecords";


export class GetAITeacherSyncDialogueSuggestionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueTasks?: GetAITeacherSyncDialogueSuggestionRequestDialogueTasks[];
  /**
   * @example
   * en-gb
   */
  languageCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  records?: GetAITeacherSyncDialogueSuggestionRequestRecords[];
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
      dialogueTasks: { 'type': 'array', 'itemType': GetAITeacherSyncDialogueSuggestionRequestDialogueTasks },
      languageCode: 'string',
      records: { 'type': 'array', 'itemType': GetAITeacherSyncDialogueSuggestionRequestRecords },
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

