// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogReservePolicy extends $dara.Model {
  /**
   * @example
   * 7
   */
  expirationDays?: number;
  /**
   * @example
   * true
   */
  openHistory?: boolean;
  static names(): { [key: string]: string } {
    return {
      expirationDays: 'expirationDays',
      openHistory: 'openHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationDays: 'number',
      openHistory: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

