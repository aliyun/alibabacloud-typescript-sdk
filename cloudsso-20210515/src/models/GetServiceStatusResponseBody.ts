// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceStatusResponseBodyServiceStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of your Alibaba Cloud account.
   * 
   * @example
   * 151266687691****
   */
  accountId?: string;
  /**
   * @remarks
   * Indicates whether the prerequisites for enabling CloudSSO are met. Valid values:
   * 
   * - Success: The prerequisites are met.
   * 
   * - Failed: The prerequisites are not met.
   * 
   * > The value of this parameter is returned only if the value of `Status` is `Disabled`.
   * 
   * @example
   * Success
   */
  prerequisiteCheckResult?: string;
  /**
   * @remarks
   * The IDs of regions where directories are deployed.
   */
  regionsInUse?: string[];
  /**
   * @remarks
   * The status of CloudSSO. Valid values:
   * 
   * - Enabled
   * 
   * - Disabled
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      prerequisiteCheckResult: 'PrerequisiteCheckResult',
      regionsInUse: 'RegionsInUse',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      prerequisiteCheckResult: 'string',
      regionsInUse: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionsInUse)) {
      $dara.Model.validateArray(this.regionsInUse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ADADC31D-90EE-5459-99B0-D83DF07769A3
   */
  requestId?: string;
  /**
   * @remarks
   * The status information of CloudSSO.
   */
  serviceStatus?: GetServiceStatusResponseBodyServiceStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceStatus: GetServiceStatusResponseBodyServiceStatus,
    };
  }

  validate() {
    if(this.serviceStatus && typeof (this.serviceStatus as any).validate === 'function') {
      (this.serviceStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

