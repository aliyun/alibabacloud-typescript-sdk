// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChannelAlertsResponseBodyProgramAlerts extends $dara.Model {
  /**
   * @remarks
   * The ARN of the program.
   * 
   * @example
   * acs:ims:mediaweaver:<regionId>:<userId>:program/myChannel/MyProgram
   */
  arn?: string;
  /**
   * @remarks
   * The alert type.
   */
  category?: string;
  /**
   * @remarks
   * The number of alerts.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The time when the alert was last modified in UTC.
   * 
   * @example
   * 2024-07-16T10:03Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The name of the program.
   * 
   * @example
   * program_name
   */
  programName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      category: 'Category',
      count: 'Count',
      gmtModified: 'GmtModified',
      programName: 'ProgramName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      category: 'string',
      count: 'number',
      gmtModified: 'string',
      programName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

