// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SchedulingRule extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  cronTab?: string;
  /**
   * **if can be null:**
   * true
   */
  endAt?: string;
  /**
   * **if can be null:**
   * true
   */
  executeOnce?: boolean;
  /**
   * **if can be null:**
   * true
   */
  startAt?: string;
  static names(): { [key: string]: string } {
    return {
      cronTab: 'CronTab',
      endAt: 'EndAt',
      executeOnce: 'ExecuteOnce',
      startAt: 'StartAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronTab: 'string',
      endAt: 'string',
      executeOnce: 'boolean',
      startAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

