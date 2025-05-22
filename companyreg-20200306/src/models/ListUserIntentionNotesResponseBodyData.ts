// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserIntentionNotesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2022-01-25 10:21:38
   */
  createTime?: string;
  note?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      note: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

