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

export class ListChannelAlertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The alerts.
   */
  programAlerts?: ListChannelAlertsResponseBodyProgramAlerts[];
  /**
   * @remarks
   * **Request ID**
   * 
   * @example
   * xxx-xxxx-xxxxx-xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of alerts returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      programAlerts: 'ProgramAlerts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      programAlerts: { 'type': 'array', 'itemType': ListChannelAlertsResponseBodyProgramAlerts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.programAlerts)) {
      $dara.Model.validateArray(this.programAlerts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

