// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupLatencyRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the time range to query. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-14T06:26:14Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * d825094fdd114a869f5adb443d9b7ead
   */
  groupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The environment in which you want to perform the query. Valid values:
   * 
   * *   **RELEASE**: the production environment
   * *   **PRE**: the staging environment
   * *   **TEST**: the test environment
   * 
   * This parameter is required.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  /**
   * @remarks
   * The start time of the time range to query. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-03-30T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      groupId: 'string',
      securityToken: 'string',
      stageName: 'string',
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

