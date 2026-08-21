// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotAnalysisRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The application type.
   * 
   * This parameter is required.
   * 
   * @example
   * GR
   */
  appType?: string;
  /**
   * @remarks
   * The end time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1725413948000
   */
  begEnd?: number;
  /**
   * @remarks
   * The start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1725410348000
   */
  begStart?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-2ze5ru5rjurix7f71sxv
   */
  instance?: string;
  /**
   * @remarks
   * The process PID.
   * 
   * @example
   * 1657494
   */
  pid?: number;
  /**
   * @remarks
   * The name of the table to query.
   * 
   * @example
   * prof_on
   */
  table?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      appType: 'appType',
      begEnd: 'beg_end',
      begStart: 'beg_start',
      instance: 'instance',
      pid: 'pid',
      table: 'table',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      appType: 'string',
      begEnd: 'number',
      begStart: 'number',
      instance: 'string',
      pid: 'number',
      table: 'string',
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

