// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmsJobResponseBodyData extends $dara.Model {
  asyncTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'asyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

