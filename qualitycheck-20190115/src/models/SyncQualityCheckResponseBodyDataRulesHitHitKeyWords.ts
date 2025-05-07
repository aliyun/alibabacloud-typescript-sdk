// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncQualityCheckResponseBodyDataRulesHitHitKeyWords extends $dara.Model {
  /**
   * @example
   * 2312
   */
  cid?: number;
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 4
   */
  pid?: number;
  /**
   * @example
   * 4
   */
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      from: 'From',
      pid: 'Pid',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'number',
      from: 'number',
      pid: 'number',
      to: 'number',
      val: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

