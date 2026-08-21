// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVmcoreDiagnosisTaskRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bbe94a98-4192-4172-b856-95777e0a55d7
   */
  taskId?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      taskId: 'taskId',
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

