// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotTrackingRequest extends $dara.Model {
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
   */
  hotType?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * prof_on
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      begEnd: 'beg_end',
      begStart: 'beg_start',
      hotType: 'hot_type',
      instance: 'instance',
      pid: 'pid',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begEnd: 'number',
      begStart: 'number',
      hotType: 'string',
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

