// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancePacketsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-05-24T10:14:53Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * apigateway-cn-2r426lavr001
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
   * 2022-05-18T01:14:26Z
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

