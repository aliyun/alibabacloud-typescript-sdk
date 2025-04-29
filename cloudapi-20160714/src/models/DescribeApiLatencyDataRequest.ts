// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiLatencyDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * d6f679aeb3be4b91b3688e887ca1fe16
   */
  apiId?: string;
  /**
   * @remarks
   * The end time in UTC. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-07-23T09:28:48Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 63be9002440b4778a61122f14c2b2bbb
   */
  groupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The environment. Valid values:
   * 
   * *   **RELEASE**
   * *   **PRE**: the pre-release environment
   * *   **TEST**
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  /**
   * @remarks
   * The start time in UTC. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-07-23T08:28:48Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      endTime: 'EndTime',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
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

