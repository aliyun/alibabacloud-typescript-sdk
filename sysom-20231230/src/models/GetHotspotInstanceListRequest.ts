// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotInstanceListRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The end time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1725413947000
   */
  begEnd?: number;
  /**
   * @remarks
   * The start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1725413647000
   */
  begStart?: number;
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
      table: 'table',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      begEnd: 'number',
      begStart: 'number',
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

