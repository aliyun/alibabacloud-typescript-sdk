// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperationSuspEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the request source.
   * 
   * Set the value to **sas**, which indicates that the request is sent from Security Center.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The operation that you want to perform on alerts. Valid values:
   * 
   * *   **deal**: quarantines the source file of the malicious process.
   * *   **ignore**: ignores the alerts.
   * *   **mark_mis_info**: marks the alerts as false positives by adding the alerts to the whitelist.
   * *   **rm_mark_mis_info**: cancels false positives by removing the alerts from the whitelist.
   * *   **offline_handled**: marks the alerts as handled.
   * 
   * This parameter is required.
   * 
   * @example
   * deal
   */
  operation?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The suboperation that you want to perform when you quarantine the source file of the malicious process. Valid values:
   * 
   * *   **killAndQuaraFileByPidAndMd5andPath**: terminates the process based on its process ID (PID) and quarantines the source file of the process.
   * *   **quaraFileByMd5andPath**: quarantines the source file of the process.
   * *   **killAndQuaraFileByMd5andPath**: terminates the process and quarantines the source file of the process.
   * 
   * @example
   * killAndQuaraFileByPidAndMd5andPath
   */
  subOperation?: string;
  /**
   * @remarks
   * The IDs of alert events.
   * 
   * > You can call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to obtain the IDs of alert events from the SecurityEventIds response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 290852
   */
  suspiciousEventIds?: string;
  /**
   * @remarks
   * The type of the exceptions. Valid values:
   * 
   * *   **alarm**: alerts
   * *   **null**: exceptions
   * 
   * @example
   * alarm
   */
  warnType?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      operation: 'Operation',
      sourceIp: 'SourceIp',
      subOperation: 'SubOperation',
      suspiciousEventIds: 'SuspiciousEventIds',
      warnType: 'WarnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      operation: 'string',
      sourceIp: 'string',
      subOperation: 'string',
      suspiciousEventIds: 'string',
      warnType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

