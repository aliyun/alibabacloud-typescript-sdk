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
   * - running: Running.
   * - renewing: Being renewed.
   * - upgrading: Being upgraded.
   * - releasePrepaidService: Released due to prepaid expiration.
   * - creating: Being created.
   * - downgrading: Being downgraded.
   * - ceasePrepaidService: Suspended due to prepaid expiration.
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

