// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoResourceOptimizeRulesRequest extends $dara.Model {
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
   * *   Specify the parameter value as a JSON array, such as `[\\"Database account 1\\",\\"Database account 2\\"]`. Separate database instance IDs with commas (,).
   * 
   * *   By default, if you leave this parameter empty, all database instances for which the automatic fragment recycling feature has been enabled within the current Alibaba Cloud account are returned. The following types of database instances are returned:
   * 
   *     *   Database instances for which the automatic fragment recycling feature is currently enabled.
   *     *   Database instances for which the automatic fragment recycling feature was once enabled but is currently disabled, including those for which DAS Enterprise Edition has been disabled but excluding those that have been released.
   * 
   * @example
   * [\\"rm-2ze8g2am97624****\\",\\"rm-2vc54m2a6pd6p****\\",\\"rm-2ze9xrhze0709****\\",\\"rm-2ze8g2am97627****\\"]
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

