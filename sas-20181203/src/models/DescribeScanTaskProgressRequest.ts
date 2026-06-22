// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScanTaskProgressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the virus scan task that you want to query.
   * > You can call the [StartVirusScanTask](~~StartVirusScanTask~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 282832
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

