// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotTrackingRequest extends $dara.Model {
  xDebugId?: string;
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
   * The hot spot type.
   * 
   * This parameter is required.
   * 
   * @example
   * alloc
   */
  hotType?: string;
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
   * This parameter is required.
   * 
   * @example
   * prof_on
   */
  table?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      begEnd: 'beg_end',
      begStart: 'beg_start',
      hotType: 'hot_type',
      instance: 'instance',
      pid: 'pid',
      table: 'table',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      begEnd: 'number',
      begStart: 'number',
      hotType: 'string',
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

