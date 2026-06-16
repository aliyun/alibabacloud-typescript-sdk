// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WindowLimit extends $dara.Model {
  /**
   * @remarks
   * The duration of the time window in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  durationSecs?: number;
  /**
   * @remarks
   * The maximum requests allowed within the time window.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      durationSecs: 'durationSecs',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecs: 'number',
      limit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

