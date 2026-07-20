// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomerNoteEditRequest extends $dara.Model {
  /**
   * @example
   * 13833333333
   */
  contactInformation?: string;
  /**
   * @example
   * 张三
   */
  contactName?: string;
  /**
   * @example
   * 日常拜访客户，讨论客户agent建设方案
   */
  noteContent?: string;
  /**
   * @example
   * 1629862
   */
  noteId?: number;
  /**
   * @example
   * 1784266662000
   */
  touchDate?: number;
  static names(): { [key: string]: string } {
    return {
      contactInformation: 'ContactInformation',
      contactName: 'ContactName',
      noteContent: 'NoteContent',
      noteId: 'NoteId',
      touchDate: 'TouchDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactInformation: 'string',
      contactName: 'string',
      noteContent: 'string',
      noteId: 'number',
      touchDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

