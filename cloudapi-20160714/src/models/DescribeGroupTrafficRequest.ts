// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupTrafficRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for the query. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-06-16T02:16:53Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * 16df9d11caa04900bcafe23b38a81600
   */
  groupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The environment to which the APIs in the API group are published. Valid values:
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
   * The start time for the query. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-29T01:27:43Z
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

