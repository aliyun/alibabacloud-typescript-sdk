// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Adb4MysqlSparkDiagnosisInfo } from "./Adb4mysqlSparkDiagnosisInfo";


export class DescribeSparkAppDiagnosisInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
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
   * > You can call the [ListSparkApps](https://help.aliyun.com/document_detail/455888.html) operation to query all application IDs.
   * 
   * @example
   * s202404141952sz6a1391200****
   */
  appId?: string;
  /**
   * @remarks
   * The CPU utilization. Unit: percentage (%).
   * 
   * @example
   * 100
   */
  cpuUtilization?: number;
  /**
   * @remarks
   * The list of Spark analysis information.
   */
  diagnosisInfoList?: Adb4MysqlSparkDiagnosisInfo[];
  /**
   * @remarks
   * The execution duration of the Spark application. Unit: milliseconds.
   * 
   * @example
   * 281063
   */
  durationInMillis?: number;
  /**
   * @remarks
   * The time consumed by the Java Virtual Machine (JVM) to perform garbage collection. Unit: milliseconds.
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
   * The amount of data read during the shuffle process. Unit: bytes.
   * 
   * @example
   * 4096000
   */
  shuffleReadInByte?: number;
  /**
   * @remarks
   * The amount of data written during the shuffle process. Unit: bytes.
   * 
   * @example
   * 4096000
   */
  shuffleWriteInByte?: number;
  /**
   * @remarks
   * The data volume spilled to disk when out of memory. Unit: bytes.
   * 
   * @example
   * 0
   */
  spillInByte?: number;
  /**
   * @remarks
   * The start time of the execution.
   * 
   * @example
   * 1718329831000
   */
  startedTime?: number;
  /**
   * @remarks
   * The status of the asynchronous import or export task to query. Valid values:
   * * **RUNNING**: The task is in progress.
   * * **FINISHED**: The task succeeded.
   * * **FAILED**: The task failed.
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

