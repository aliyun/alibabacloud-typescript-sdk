// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedClusterMonitorRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CPU alert threshold, in percentage.
   * 
   * @example
   * 80
   */
  cpuAlarmThreshold?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * dtsClustervcwn1oeyu5fx4yf
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The disk alert threshold, in percentage.
   * 
   * @example
   * 80
   */
  diskAlarmThreshold?: string;
  /**
   * @remarks
   * The DU alert threshold, in percentage.
   * 
   * @example
   * 46
   */
  duAlarmThreshold?: string;
  /**
   * @remarks
   * The error code returned if the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The memory alert threshold, in percentage.
   * 
   * @example
   * 80
   */
  memAlarmThreshold?: string;
  /**
   * @remarks
   * The alert switch. Valid values:
   * 
   * - **1**: enabled.
   * - **0**: disabled.
   * 
   * @example
   * 1
   */
  noticeSwitch?: string;
  /**
   * @remarks
   * The phone numbers that receive alerts. If there are multiple phone numbers, they are separated by commas (,).
   * 
   * @example
   * 186****7653
   */
  phones?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      cpuAlarmThreshold: 'CpuAlarmThreshold',
      dedicatedClusterId: 'DedicatedClusterId',
      diskAlarmThreshold: 'DiskAlarmThreshold',
      duAlarmThreshold: 'DuAlarmThreshold',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      memAlarmThreshold: 'MemAlarmThreshold',
      noticeSwitch: 'NoticeSwitch',
      phones: 'Phones',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuAlarmThreshold: 'string',
      dedicatedClusterId: 'string',
      diskAlarmThreshold: 'string',
      duAlarmThreshold: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      memAlarmThreshold: 'string',
      noticeSwitch: 'string',
      phones: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

