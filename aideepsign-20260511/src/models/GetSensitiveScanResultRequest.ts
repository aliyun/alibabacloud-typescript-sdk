// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSensitiveScanResultRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID returned by `CreateSensitiveScanTask`.
   * 
   * This parameter is required.
   * 
   * @example
   * f47ac10b-58cc-4372-a567-0e02b2c3d479
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
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

