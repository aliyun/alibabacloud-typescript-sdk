// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppOtaTaskResponseBodyData extends $dara.Model {
  taskUid?: string;
  static names(): { [key: string]: string } {
    return {
      taskUid: 'TaskUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

