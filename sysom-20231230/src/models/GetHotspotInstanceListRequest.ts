// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotInstanceListRequest extends $dara.Model {
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
   * prof_on
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      begEnd: 'beg_end',
      begStart: 'beg_start',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begEnd: 'number',
      begStart: 'number',
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

