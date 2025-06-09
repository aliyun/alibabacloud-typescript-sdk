// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Schedule extends $dara.Model {
  /**
   * @example
   * 0/5 * * * *
   */
  cronExpression?: string;
  /**
   * @example
   * 4
   */
  delay?: number;
  /**
   * @example
   * 60s
   */
  interval?: string;
  /**
   * @example
   * false
   */
  runImmediately?: boolean;
  /**
   * @example
   * +0800
   */
  timeZone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FixedRate
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'cronExpression',
      delay: 'delay',
      interval: 'interval',
      runImmediately: 'runImmediately',
      timeZone: 'timeZone',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      delay: 'number',
      interval: 'string',
      runImmediately: 'boolean',
      timeZone: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

