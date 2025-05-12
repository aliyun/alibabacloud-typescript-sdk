// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GR
   */
  appType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725413948000
   */
  begEnd?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725410348000
   */
  begStart?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-2ze5ru5rjurix7f71sxv
   */
  instance?: string;
  /**
   * @example
   * 1657494
   */
  pid?: number;
  /**
   * @example
   * prof_on
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      begEnd: 'beg_end',
      begStart: 'beg_start',
      instance: 'instance',
      pid: 'pid',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      begEnd: 'number',
      begStart: 'number',
      instance: 'string',
      pid: 'number',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

