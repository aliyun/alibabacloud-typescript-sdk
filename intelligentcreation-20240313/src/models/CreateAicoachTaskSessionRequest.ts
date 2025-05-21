// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAICoachTaskSessionRequest extends $dara.Model {
  /**
   * @example
   * 821882330423951360
   */
  taskId?: string;
  /**
   * @example
   * 1730530943640489
   */
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

