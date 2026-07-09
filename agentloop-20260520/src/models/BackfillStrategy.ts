// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackfillStrategy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the backfill policy is enabled. If this parameter is not specified or is set to true, the policy is enabled. If this parameter is set to false, the policy is disabled but the configuration is retained.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The end of the backfill time range, in UNIX millisecond timestamp. Provide a complete time range when you need to manually start a backfill.
   * 
   * @example
   * 1782902400000
   */
  endTime?: number;
  /**
   * @remarks
   * The start of the backfill time range, in UNIX millisecond timestamp. Provide a complete time range when you need to manually start a backfill.
   * 
   * @example
   * 1782816000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

