// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupQpsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-08-23T07:27:44Z
   */
  endTime?: string;
  /**
   * @remarks
   * The API group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 264c60db9f764345a13ac5c825b229b9
   */
  groupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The environment to which the API group is published. Valid values:
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
   * The start time. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-08-12T06:09:52Z
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

