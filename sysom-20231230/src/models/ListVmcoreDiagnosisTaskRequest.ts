// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVmcoreDiagnosisTaskRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The number of past days to query tasks for, up to a maximum of 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  days?: number;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      days: 'days',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      days: 'number',
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

