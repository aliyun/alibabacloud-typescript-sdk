// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Adb4MysqlSparkDiagnosisInfo } from "./Adb4mysqlSparkDiagnosisInfo";


export class DescribeSparkAppDiagnosisInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the request denial.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1*****************7",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcKwyhk62IeYly4hQ+5IpXjkh1GQXuDRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "2***************9",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * >  You can call the [ListSparkApps](https://help.aliyun.com/document_detail/455888.html) operation to query all application IDs.
   * 
   * @example
   * s202404141952sz6a1391200****
   */
  appId?: string;
  /**
   * @remarks
   * The CPU utilization. Unit: %.
   * 
   * @example
   * 100
   */
  cpuUtilization?: number;
  /**
   * @remarks
   * The queried diagnostic information.
   */
  diagnosisInfoList?: Adb4MysqlSparkDiagnosisInfo[];
  /**
   * @remarks
   * The execution duration of the application. Unit: milliseconds.
   * 
   * @example
   * 281063
   */
  durationInMillis?: number;
  /**
   * @remarks
   * The amount of time consumed by the Java virtual machine to perform garbage collection operations. Unit: milliseconds.
   * 
   * @example
   * 81055
   */
  JVMGcCostInMillis?: number;
  /**
   * @remarks
   * The peak memory usage. Unit: bytes.
   * 
   * @example
   * 4096000
   */
  peakMemoryInByte?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FB5AC339-91F6-5000-8E5A-F47065B01B87
   */
  requestId?: string;
  /**
   * @remarks
   * The amount of data used for shuffle reads. Unit: bytes.
   * 
   * @example
   * 4096000
   */
  shuffleReadInByte?: number;
  /**
   * @remarks
   * The amount of data used for shuffle writes. Unit: bytes.
   * 
   * @example
   * 4096000
   */
  shuffleWriteInByte?: number;
  /**
   * @remarks
   * The amount of data spilled to disks when the memory is insufficient. Unit: bytes.
   * 
   * @example
   * 0
   */
  spillInByte?: number;
  /**
   * @remarks
   * The time when the application started to be executed.
   * 
   * @example
   * 1718329831000
   */
  startedTime?: number;
  /**
   * @remarks
   * The status of the asynchronous import or export job. Valid values:
   * 
   * *   **RUNNING**
   * *   **FINISHED**
   * *   **FAILED**
   * 
   * @example
   * FINISHED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      appId: 'AppId',
      cpuUtilization: 'CpuUtilization',
      diagnosisInfoList: 'DiagnosisInfoList',
      durationInMillis: 'DurationInMillis',
      JVMGcCostInMillis: 'JVMGcCostInMillis',
      peakMemoryInByte: 'PeakMemoryInByte',
      requestId: 'RequestId',
      shuffleReadInByte: 'ShuffleReadInByte',
      shuffleWriteInByte: 'ShuffleWriteInByte',
      spillInByte: 'SpillInByte',
      startedTime: 'StartedTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      appId: 'string',
      cpuUtilization: 'number',
      diagnosisInfoList: { 'type': 'array', 'itemType': Adb4MysqlSparkDiagnosisInfo },
      durationInMillis: 'number',
      JVMGcCostInMillis: 'number',
      peakMemoryInByte: 'number',
      requestId: 'string',
      shuffleReadInByte: 'number',
      shuffleWriteInByte: 'number',
      spillInByte: 'number',
      startedTime: 'number',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnosisInfoList)) {
      $dara.Model.validateArray(this.diagnosisInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

