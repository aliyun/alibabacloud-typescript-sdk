// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRatePlanInstanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * xcdn-91fknmb80f0g***
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * *   running: The instance is running.
   * *   renewing: The instance is being renewed.
   * *   upgrading: The configuration of the instance is being upgraded.
   * *   releasePrepaidService: The instance is released due to expiration.
   * *   creating: The instance is being created.
   * *   downgrading: The configuration of the instance is being downgraded.
   * *   ceasePrepaidService: The instance has expired.
   * 
   * @example
   * running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60423A7F-A83D-1E24-B80E-86DD25790759
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

