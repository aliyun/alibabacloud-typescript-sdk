// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadNumGroupByClassResponseBodyData extends $dara.Model {
  classId?: number;
  msgCount?: number;
  static names(): { [key: string]: string } {
    return {
      classId: 'ClassId',
      msgCount: 'MsgCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'number',
      msgCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

