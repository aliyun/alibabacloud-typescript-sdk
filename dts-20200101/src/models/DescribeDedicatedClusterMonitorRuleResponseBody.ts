// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedClusterMonitorRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alert threshold for CPU utilization. Unit: percentage.
   * 
   * @example
   * 80
   */
  cpuAlarmThreshold?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * dtsClustervcwn1oeyu5fx4yf
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The alert threshold for disk usage. Unit: percentage.
   * 
   * @example
   * 80
   */
  diskAlarmThreshold?: string;
  /**
   * @remarks
   * The alert threshold for DTS Unit (DU) usage. Unit: percentage.
   * 
   * @example
   * 46
   */
  duAlarmThreshold?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
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
   * The alert threshold for memory usage. Unit: percentage.
   * 
   * @example
   * 80
   */
  memAlarmThreshold?: string;
  /**
   * @remarks
   * Indicates whether the alert feature is enabled. Valid values:
   * 
   * *   **1**: The alert feature is enabled.
   * *   **0**: The alert feature is disabled.
   * 
   * @example
   * 1
   */
  noticeSwitch?: string;
  /**
   * @remarks
   * The mobile phone number to which alerts are sent. Separate multiple mobile phone numbers with commas (,).
   * 
   * @example
   * 186****7653
   */
  phones?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

