// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableAutoThrottleRulesRequest extends $dara.Model {
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
   * >  Set this parameter to a JSON array that consists of multiple instance IDs. Separate instance IDs with commas (,). Example: `[\\"Instance ID1\\",\\"Instance ID2\\"]`.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"rm-2ze8g2am97624****\\",\\"rm-2ze9xrhze0709****\\"]
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

