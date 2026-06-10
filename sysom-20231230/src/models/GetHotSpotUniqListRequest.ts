// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotSpotUniqListRequest extends $dara.Model {
  /**
   * @remarks
   * End time
   * 
   * This parameter is required.
   * 
   * @example
   * 1735010351000
   */
  begEnd?: number;
  /**
   * @remarks
   * Start time
   * 
   * This parameter is required.
   * 
   * @example
   * 1735008551000
   */
  begStart?: number;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1g2i0siirefgwnnnvy
   */
  instance?: string;
  /**
   * @remarks
   * Process ID
   * 
   * @example
   * 12345
   */
  pid?: number;
  /**
   * @remarks
   * Table name
   * 
   * @example
   * prof_on
   */
  table?: string;
  /**
   * @remarks
   * Identity flag
   * 
   * This parameter is required.
   * 
   * @example
   * 默认需要为"flag"，待查询的字段
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

