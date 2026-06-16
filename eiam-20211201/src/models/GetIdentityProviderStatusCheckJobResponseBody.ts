// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderStatusCheckJobResponseBodyIdentityProviderStatusCheckJobJobCheckItemsErrorReason extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * NetworkAccessPointWarning.SingleNetworkAccessPath
   */
  errorCode?: string;
  /**
   * @remarks
   * The error level.
   * 
   * @example
   * high
   */
  errorLevel?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * There is only one path in the current network access endpoint.
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorLevel: 'ErrorLevel',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorLevel: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderStatusCheckJobResponseBodyIdentityProviderStatusCheckJobJobCheckItems extends $dara.Model {
  /**
   * @remarks
   * The reason for the error.
   */
  errorReason?: GetIdentityProviderStatusCheckJobResponseBodyIdentityProviderStatusCheckJobJobCheckItemsErrorReason;
  /**
   * @remarks
   * The major check item.
   * 
   * @example
   * network_check
   */
  majorCheckItem?: string;
  /**
   * @remarks
   * The minor check item.
   * 
   * @example
   * network_access_status
   */
  minorCheckItem?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * success
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      errorReason: 'ErrorReason',
      majorCheckItem: 'MajorCheckItem',
      minorCheckItem: 'MinorCheckItem',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorReason: GetIdentityProviderStatusCheckJobResponseBodyIdentityProviderStatusCheckJobJobCheckItemsErrorReason,
      majorCheckItem: 'string',
      minorCheckItem: 'string',
      result: 'string',
    };
  }

  validate() {
    if(this.errorReason && typeof (this.errorReason as any).validate === 'function') {
      (this.errorReason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderStatusCheckJobResponseBodyIdentityProviderStatusCheckJob extends $dara.Model {
  /**
   * @remarks
   * The result of the check task.
   * 
   * @example
   * success
   */
  checkResult?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1763776265757
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the IdP.
   * 
   * @example
   * idp_ncehkms65fiefobrvwy2blrxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * The ID of the IdP status check job.
   * 
   * @example
   * async_000036tfu8cgngmakngrr2rk75qgf87pf3rxxx
   */
  identityProviderStatusCheckJobId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ki6hd7ihir4ybawogqk6kqsfxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The results of the status check subtasks.
   */
  jobCheckItems?: GetIdentityProviderStatusCheckJobResponseBodyIdentityProviderStatusCheckJobJobCheckItems[];
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1763776265757
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the check task.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
      endTime: 'EndTime',
      identityProviderId: 'IdentityProviderId',
      identityProviderStatusCheckJobId: 'IdentityProviderStatusCheckJobId',
      instanceId: 'InstanceId',
      jobCheckItems: 'JobCheckItems',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: 'string',
      endTime: 'number',
      identityProviderId: 'string',
      identityProviderStatusCheckJobId: 'string',
      instanceId: 'string',
      jobCheckItems: { 'type': 'array', 'itemType': GetIdentityProviderStatusCheckJobResponseBodyIdentityProviderStatusCheckJobJobCheckItems },
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobCheckItems)) {
      $dara.Model.validateArray(this.jobCheckItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderStatusCheckJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the IdP status check job.
   */
  identityProviderStatusCheckJob?: GetIdentityProviderStatusCheckJobResponseBodyIdentityProviderStatusCheckJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderStatusCheckJob: 'IdentityProviderStatusCheckJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderStatusCheckJob: GetIdentityProviderStatusCheckJobResponseBodyIdentityProviderStatusCheckJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.identityProviderStatusCheckJob && typeof (this.identityProviderStatusCheckJob as any).validate === 'function') {
      (this.identityProviderStatusCheckJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

