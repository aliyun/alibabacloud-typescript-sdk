// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportNodesStatusShrinkRequest extends $dara.Model {
  /**
   * @example
   * dwd_mysql_lingwan_faxing_login_di
   */
  description?: string;
  /**
   * @example
   * 2024-07-10T10:17:06
   */
  endTime?: string;
  /**
   * @example
   * hardware-disk-error
   */
  issueCategory?: string;
  nodesShrink?: string;
  /**
   * @example
   * SoftwareError
   */
  reason?: string;
  /**
   * @example
   * 2024-09-22T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      endTime: 'EndTime',
      issueCategory: 'IssueCategory',
      nodesShrink: 'Nodes',
      reason: 'Reason',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endTime: 'string',
      issueCategory: 'string',
      nodesShrink: 'string',
      reason: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

