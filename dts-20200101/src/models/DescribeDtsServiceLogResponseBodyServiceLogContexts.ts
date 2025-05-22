// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsServiceLogResponseBodyServiceLogContexts extends $dara.Model {
  /**
   * @remarks
   * The log content.
   * 
   * @example
   * Statistics: generator = 369173; collector = 470109; replicator = 2470; ping = 2/2/2; execute = 29/29/29; rt = 29/29/29; state = IDLE; queries = -1; exceptions = {connects = 0, replicates = 0}; infos = {}
   */
  context?: string;
  /**
   * @remarks
   * The log level.
   * 
   * @example
   * NORMAL
   */
  state?: string;
  /**
   * @remarks
   * The time when the logs were collected. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-13T09:13:39.443+00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      state: 'State',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      state: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

