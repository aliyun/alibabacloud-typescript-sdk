// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotSpotUniqListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1735010351000
   */
  begEnd?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1735008551000
   */
  begStart?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-bp1g2i0siirefgwnnnvy
   */
  instance?: string;
  /**
   * @example
   * 12345
   */
  pid?: number;
  /**
   * @example
   * prof_on
   */
  table?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uniq?: string;
  static names(): { [key: string]: string } {
    return {
      begEnd: 'beg_end',
      begStart: 'beg_start',
      instance: 'instance',
      pid: 'pid',
      table: 'table',
      uniq: 'uniq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begEnd: 'number',
      begStart: 'number',
      instance: 'string',
      pid: 'number',
      table: 'string',
      uniq: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

