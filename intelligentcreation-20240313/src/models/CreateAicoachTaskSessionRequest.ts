// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAICoachTaskSessionRequest extends $dara.Model {
  taskId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

