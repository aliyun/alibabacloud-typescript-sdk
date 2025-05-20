// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocExtractionResultRequest extends $dara.Model {
  /**
   * @remarks
   * - Task ID.
   * - taskId is obtained from the SubmitDocExtractionTaskAdvance and SubmitDocExtractionTask interfaces.
   * 
   * This parameter is required.
   * 
   * @example
   * 97693b4c-17a8-4198-aa28-798d3c855577mhrv
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

