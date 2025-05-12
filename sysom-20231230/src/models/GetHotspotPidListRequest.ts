// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotPidListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725413947000
   */
  begEnd?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725413647000
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
      instance: 'instance',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begEnd: 'number',
      begStart: 'number',
      instance: 'string',
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

