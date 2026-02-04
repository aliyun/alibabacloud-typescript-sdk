// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderStatusCheckJobResponseBodyIdentityProviderStatusCheckJobJobCheckItemsErrorReason extends $dara.Model {
  /**
   * @remarks
   * 错误码
   * 
   * @example
   * NetworkAccessPointWarning.SingleNetworkAccessPath
   */
  errorCode?: string;
  /**
   * @remarks
   * 错误级别
   * 
   * @example
   * high
   */
  errorLevel?: string;
  /**
   * @remarks
   * 错误信息
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
   * 错误原因
   */
  errorReason?: GetIdentityProviderStatusCheckJobResponseBodyIdentityProviderStatusCheckJobJobCheckItemsErrorReason;
  /**
   * @remarks
   * 主要检查项
   * 
   * @example
   * network_check
   */
  majorCheckItem?: string;
  /**
   * @remarks
   * 次要检查项
   * 
   * @example
   * network_access_status
   */
  minorCheckItem?: string;
  /**
   * @remarks
   * 结果
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
   * 任务检查结果
   * 
   * @example
   * success
   */
  checkResult?: string;
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 1763776265757
   */
  endTime?: number;
  /**
   * @remarks
   * IdP身份提供方
   * 
   * @example
   * idp_ncehkms65fiefobrvwy2blrxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * IdP状态检查任务Id
   * 
   * @example
   * async_000036tfu8cgngmakngrr2rk75qgf87pf3rxxx
   */
  identityProviderStatusCheckJobId?: string;
  /**
   * @remarks
   * IDaaS EIAM 实例Id
   * 
   * @example
   * idaas_ki6hd7ihir4ybawogqk6kqsfxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 状态检查子项任务结果信息
   */
  jobCheckItems?: GetIdentityProviderStatusCheckJobResponseBodyIdentityProviderStatusCheckJobJobCheckItems[];
  /**
   * @remarks
   * 开始时间
   * 
   * @example
   * 1763776265757
   */
  startTime?: number;
  /**
   * @remarks
   * 任务检查状态
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
  identityProviderStatusCheckJob?: GetIdentityProviderStatusCheckJobResponseBodyIdentityProviderStatusCheckJob;
  /**
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

