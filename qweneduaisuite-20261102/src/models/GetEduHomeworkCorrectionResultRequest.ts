// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEduHomeworkCorrectionResultRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * b18eabc4-5d84-40b0-ae20-e0eb2f585781
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

