// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVLExtractionResultRequest extends $dara.Model {
  /**
   * @remarks
   * - taskID.
   * 
   * - The taskId is obtained from the interfaces SubmitVLExtractionTaskAdvance and SubmitVLExtractionTask.
   * 
   * This parameter is required.
   * 
   * @example
   * 1436b6f5-ddea-4308-9d1c-60939e5d5ea8
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

