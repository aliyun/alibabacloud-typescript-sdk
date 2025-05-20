// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoThrottleRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  consoleContext?: string;
  /**
   * @remarks
   * The database instance IDs.
   * 
   * *   Set this parameter to a JSON array that consists of multiple instance IDs. Separate instance IDs with commas (,). Example: `[\\"Instance ID1\\",\\"Instance ID2\\"]`.
   * 
   * *   By default, if you leave this parameter empty, all database instances for which the automatic SQL throttling feature has been enabled within the current Alibaba Cloud account are returned. The following types of database instances are returned:
   * 
   *     *   Database instances for which the automatic SQL throttling feature is currently enabled.
   *     *   Database instances for which the automatic SQL throttling feature was once enabled but is currently disabled. Released database instances are not included.
   * 
   * @example
   * [\\"rm-2ze8g2am97624****\\",\\"rm-2vc54m2a6pd6p****\\",\\"rm-2ze9xrhze0709****\\"]
   */
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

