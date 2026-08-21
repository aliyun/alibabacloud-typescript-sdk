// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDiagnosisResultRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The diagnostic task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * quzuYl23
   */
  taskId?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      taskId: 'task_id',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      taskId: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

