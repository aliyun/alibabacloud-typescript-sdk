// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDropConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-31T07:00:09Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the dedicated instance.
   * 
   * This parameter is required.
   * 
   * @example
   * apigateway-cn-n6w1v1234501
   */
  instanceId?: string;
  /**
   * @remarks
   * The statistical metric. Valid values:
   * 
   * *   Maximum
   * *   Minimum
   * *   Average
   * 
   * This parameter is required.
   * 
   * @example
   * Maximum
   */
  sbcName?: string;
  securityToken?: string;
  /**
   * @remarks
   * The start time. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-31T06:00:09Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      sbcName: 'SbcName',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      sbcName: 'string',
      securityToken: 'string',
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

